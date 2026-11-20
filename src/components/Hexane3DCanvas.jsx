import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EQUIPMENTS, PIPELINES } from '../data/hexane700Data';

export default function Hexane3DCanvas({
  selectedEquipmentId,
  onSelectEquipment,
  activeSubsystem,
  activeScenario,
  showLabels,
  flowSpeed,
  cameraResetTrigger
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const equipmentMeshesRef = useRef({});
  const rotatingPartsRef = useRef([]);
  const alarmBeaconsRef = useRef([]);
  const particlesRef = useRef([]);
  const targetCameraPosRef = useRef(null);
  const targetLookAtRef = useRef(null);
  const [labelPositions, setLabelPositions] = useState([]);

  const propsRef = useRef({
    selectedEquipmentId,
    activeSubsystem,
    activeScenario,
    showLabels,
    flowSpeed
  });

  useEffect(() => {
    propsRef.current = {
      selectedEquipmentId,
      activeSubsystem,
      activeScenario,
      showLabels,
      flowSpeed
    };
  }, [selectedEquipmentId, activeSubsystem, activeScenario, showLabels, flowSpeed]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#060b14');
    scene.fog = new THREE.FogExp2('#060b14', 0.0085);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 400);
    camera.position.set(0, 34, 48);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.03;
    controls.minDistance = 6;
    controls.maxDistance = 110;
    controls.target.set(0, 4, 2);
    controlsRef.current = controls;

    const stopAutoCamera = () => {
      targetCameraPosRef.current = null;
      targetLookAtRef.current = null;
    };
    controls.addEventListener('start', stopAutoCamera);

    const ambientLight = new THREE.AmbientLight('#94a3b8', 1.1);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight('#f8fafc', 1.8);
    dirLight.position.set(35, 55, 30);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 150;
    const d = 48;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight('#38bdf8', 0.6);
    fillLight.position.set(-40, 25, -35);
    scene.add(fillLight);

    const groundGeo = new THREE.PlaneGeometry(110, 80);
    const groundMat = new THREE.MeshStandardMaterial({
      color: '#0f172a',
      roughness: 0.85,
      metalness: 0.15
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const gridHelper = new THREE.GridHelper(100, 50, '#1e293b', '#131c31');
    gridHelper.position.y = 0.02;
    scene.add(gridHelper);

    const rackMat = new THREE.MeshStandardMaterial({ color: '#475569', metalness: 0.7, roughness: 0.35 });
    for (let x = -34; x <= 34; x += 8.5) {
      const col1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 7.5, 0.35), rackMat);
      col1.position.set(x, 3.75, -9.5);
      col1.castShadow = true;
      scene.add(col1);

      const col2 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 7.5, 0.35), rackMat);
      col2.position.set(x, 3.75, -11.5);
      col2.castShadow = true;
      scene.add(col2);

      const beam1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 2.5), rackMat);
      beam1.position.set(x, 5.5, -10.5);
      scene.add(beam1);

      const beam2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 2.5), rackMat);
      beam2.position.set(x, 7.2, -10.5);
      scene.add(beam2);
    }

    const bundZones = [
      { x: -27, z: 8.5, w: 16, d: 14, color: '#06b6d4' },
      { x: -9, z: -4.5, w: 14, d: 11, color: '#3b82f6' },
      { x: 9, z: 9, w: 18, d: 18, color: '#f97316' },
      { x: 4, z: -14, w: 20, d: 8, color: '#10b981' },
      { x: 25.5, z: -14, w: 17, d: 9, color: '#22c55e' },
      { x: -24, z: -14, w: 18, d: 8, color: '#eab308' },
      { x: 26, z: 4.5, w: 15, d: 9, color: '#a855f7' },
      { x: -14, z: 20, w: 17, d: 7, color: '#ec4899' }
    ];

    bundZones.forEach((zone) => {
      const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(zone.w, 0.25, zone.d));
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: zone.color, transparent: true, opacity: 0.45 })
      );
      line.position.set(zone.x, 0.12, zone.z);
      scene.add(line);
    });

    const eqMap = {};
    const rotatingParts = [];
    const alarmBeacons = [];

    EQUIPMENTS.forEach((eq) => {
      const group = new THREE.Group();
      group.position.set(...eq.position);
      group.userData = { equipmentId: eq.id };

      const baseMat = new THREE.MeshStandardMaterial({
        color: eq.color,
        metalness: 0.55,
        roughness: 0.35
      });

      const steelMat = new THREE.MeshStandardMaterial({
        color: '#94a3b8',
        metalness: 0.8,
        roughness: 0.25
      });

      const [w, h, d] = eq.size;

      if (eq.type === 'tower') {
        const skirt = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.52, w * 0.58, 1.4, 24), steelMat);
        skirt.position.y = 0.7;
        skirt.castShadow = true;
        group.add(skirt);

        const body = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.48, w * 0.48, h - 2.2, 24), baseMat);
        body.position.y = 1.4 + (h - 2.2) / 2;
        body.castShadow = true;
        group.add(body);

        const dome = new THREE.Mesh(new THREE.SphereGeometry(w * 0.48, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), baseMat);
        dome.position.y = h - 0.8;
        group.add(dome);

        const railMat = new THREE.MeshStandardMaterial({ color: '#eab308', roughness: 0.4 });
        [0.35, 0.65, 0.92].forEach((ratio) => {
          const py = h * ratio;
          const plat = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.78, w * 0.78, 0.12, 20), steelMat);
          plat.position.y = py;
          group.add(plat);

          const rail = new THREE.Mesh(new THREE.TorusGeometry(w * 0.76, 0.04, 8, 24), railMat);
          rail.rotation.x = Math.PI / 2;
          rail.position.y = py + 0.55;
          group.add(rail);
        });
      } else if (eq.type === 'horizontal_drum') {
        [-w * 0.28, w * 0.28].forEach((sx) => {
          const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.4, h * 0.55, d * 0.75), steelMat);
          saddle.position.set(sx, h * 0.275, 0);
          group.add(saddle);
        });

        const shellMat = new THREE.MeshPhysicalMaterial({
          color: eq.color,
          metalness: 0.3,
          roughness: 0.2,
          transparent: true,
          opacity: 0.48
        });
        const drum = new THREE.Mesh(new THREE.CylinderGeometry(d * 0.48, d * 0.48, w * 0.82, 24), shellMat);
        drum.rotation.z = Math.PI / 2;
        drum.position.y = h * 0.68;
        drum.castShadow = true;
        group.add(drum);

        [-w * 0.41, w * 0.41].forEach((cx, idx) => {
          const cap = new THREE.Mesh(
            new THREE.SphereGeometry(d * 0.48, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2),
            baseMat
          );
          cap.rotation.z = idx === 0 ? Math.PI / 2 : -Math.PI / 2;
          cap.position.set(cx, h * 0.68, 0);
          group.add(cap);
        });

        const liqMat = new THREE.MeshStandardMaterial({
          color: eq.liquidColor || '#38bdf8',
          emissive: eq.liquidColor || '#0284c7',
          emissiveIntensity: 0.25,
          roughness: 0.2
        });
        const liq = new THREE.Mesh(new THREE.CylinderGeometry(d * 0.43, d * 0.43, w * 0.8, 20), liqMat);
        liq.rotation.z = Math.PI / 2;
        liq.scale.set(eq.liquidLevel || 0.6, 1, 0.92);
        liq.position.y = h * 0.55;
        group.add(liq);
      } else if (eq.type === 'vertical_drum' || eq.type === 'agitator_vessel') {
        const legs = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.46, w * 0.5, 0.9, 20), steelMat);
        legs.position.y = 0.45;
        group.add(legs);

        const shellMat = new THREE.MeshPhysicalMaterial({
          color: eq.color,
          metalness: 0.35,
          roughness: 0.22,
          transparent: true,
          opacity: 0.52
        });
        const vessel = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.48, w * 0.48, h - 1.2, 24), shellMat);
        vessel.position.y = 0.9 + (h - 1.2) / 2;
        vessel.castShadow = true;
        group.add(vessel);

        const liqH = (h - 1.4) * (eq.liquidLevel || 0.6);
        const liqMat = new THREE.MeshStandardMaterial({
          color: eq.liquidColor || '#38bdf8',
          emissive: eq.liquidColor || '#0284c7',
          emissiveIntensity: 0.25
        });
        const liq = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.44, w * 0.44, liqH, 20), liqMat);
        liq.position.y = 0.95 + liqH / 2;
        group.add(liq);

        if (eq.type === 'agitator_vessel') {
          const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.9, 16), steelMat);
          motor.position.y = h + 0.3;
          group.add(motor);

          const shaftGroup = new THREE.Group();
          shaftGroup.position.y = h * 0.45;
          const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, h * 0.85, 8), steelMat);
          shaftGroup.add(shaft);

          const blade = new THREE.Mesh(new THREE.BoxGeometry(w * 0.68, 0.25, 0.12), steelMat);
          blade.position.y = -h * 0.22;
          shaftGroup.add(blade);

          group.add(shaftGroup);
          rotatingParts.push({ mesh: shaftGroup, speed: 4.5, axis: 'y' });
        }
      } else if (eq.type === 'exchanger') {
        [-w * 0.3, w * 0.3].forEach((sx) => {
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.35, h * 0.5, d * 0.7), steelMat);
          leg.position.set(sx, h * 0.25, 0);
          group.add(leg);
        });

        const shell = new THREE.Mesh(new THREE.CylinderGeometry(d * 0.45, d * 0.45, w * 0.85, 24), baseMat);
        shell.rotation.z = Math.PI / 2;
        shell.position.y = h * 0.65;
        shell.castShadow = true;
        group.add(shell);

        [-w * 0.44, w * 0.44].forEach((fx) => {
          const flange = new THREE.Mesh(new THREE.CylinderGeometry(d * 0.52, d * 0.52, 0.28, 24), steelMat);
          flange.rotation.z = Math.PI / 2;
          flange.position.set(fx, h * 0.65, 0);
          group.add(flange);
        });
      } else if (eq.type === 'pump') {
        const skid = new THREE.Mesh(new THREE.BoxGeometry(w, 0.25, d * 0.8), steelMat);
        skid.position.y = 0.125;
        group.add(skid);

        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, w * 0.48, 16), steelMat);
        motor.rotation.z = Math.PI / 2;
        motor.position.set(-w * 0.2, 0.68, 0);
        motor.castShadow = true;
        group.add(motor);

        const casing = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.38, 20), baseMat);
        casing.rotation.z = Math.PI / 2;
        casing.position.set(w * 0.26, 0.72, 0);
        casing.castShadow = true;
        group.add(casing);

        const coupling = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.32, 0.32), new THREE.MeshStandardMaterial({ color: '#facc15' }));
        coupling.position.set(0.05, 0.68, 0);
        group.add(coupling);
        rotatingParts.push({ mesh: coupling, speed: 8.0, axis: 'x' });
      } else if (eq.type === 'tank') {
        const tankBody = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.48, w * 0.48, h - 0.8, 32), baseMat);
        tankBody.position.y = (h - 0.8) / 2;
        tankBody.castShadow = true;
        group.add(tankBody);

        const roof = new THREE.Mesh(new THREE.ConeGeometry(w * 0.5, 1.1, 32), steelMat);
        roof.position.y = h - 0.25;
        group.add(roof);
      } else if (eq.type === 'flaker') {
        const housing = new THREE.Mesh(new THREE.BoxGeometry(w * 0.6, h * 0.7, d * 0.8), baseMat);
        housing.position.set(-w * 0.15, h * 0.45, 0);
        housing.castShadow = true;
        group.add(housing);

        const coolingDrum = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, d * 0.65, 24), steelMat);
        coolingDrum.rotation.x = Math.PI / 2;
        coolingDrum.position.set(-w * 0.15, h * 0.55, 0);
        group.add(coolingDrum);
        rotatingParts.push({ mesh: coolingDrum, speed: 2.0, axis: 'z' });

        const conveyor = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, w * 0.5, 14), steelMat);
        conveyor.rotation.z = Math.PI / 2.3;
        conveyor.position.set(w * 0.28, h * 0.35, 0);
        group.add(conveyor);
      }

      const beaconMat = new THREE.MeshBasicMaterial({
        color: '#ef4444',
        transparent: true,
        opacity: 0
      });
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), beaconMat);
      beacon.position.y = h + 0.9;
      group.add(beacon);
      alarmBeacons.push({ id: eq.id, mesh: beacon });

      scene.add(group);
      eqMap[eq.id] = { group, data: eq };
    });

    equipmentMeshesRef.current = eqMap;
    rotatingPartsRef.current = rotatingParts;
    alarmBeaconsRef.current = alarmBeacons;

    const pipeParticles = [];
    PIPELINES.forEach((pipe) => {
      const vecPoints = pipe.points.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
      const curve = new THREE.CatmullRomCurve3(vecPoints, false, 'catmullrom', 0.12);
      const tubeGeo = new THREE.TubeGeometry(curve, 36, 0.13, 10, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: pipe.color,
        metalness: 0.4,
        roughness: 0.35,
        transparent: true,
        opacity: 0.68
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      scene.add(tubeMesh);

      const count = Math.max(3, Math.floor(curve.getLength() / 2.4));
      for (let i = 0; i < count; i++) {
        const pMesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 10, 10),
          new THREE.MeshBasicMaterial({ color: '#ffffff' })
        );
        scene.add(pMesh);
        pipeParticles.push({
          mesh: pMesh,
          curve,
          progress: i / count,
          baseSpeed: 0.18 + (i % 3) * 0.02,
          subsystem: pipe.subsystem,
          color: pipe.color
        });
      }
    });
    particlesRef.current = pipeParticles;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e) => {
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist > 5) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const allGroups = Object.values(eqMap).map((item) => item.group);
      const intersects = raycaster.intersectObjects(allGroups, true);

      if (intersects.length > 0) {
        let obj = intersects[0].object;
        while (obj && !obj.userData?.equipmentId) {
          obj = obj.parent;
        }
        if (obj?.userData?.equipmentId) {
          onSelectEquipment(obj.userData.equipmentId);
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let frameId;
    const clock = new THREE.Clock();
    let labelUpdateCounter = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();
      const { selectedEquipmentId: selId, activeScenario: scenario, showLabels: labelsOn, flowSpeed: speed } =
        propsRef.current;

      rotatingPartsRef.current.forEach((item) => {
        if (speed > 0) {
          item.mesh.rotation[item.axis] += item.speed * delta * speed;
        }
      });

      particlesRef.current.forEach((p) => {
        if (speed > 0) {
          p.progress = (p.progress + p.baseSpeed * delta * speed) % 1;
        }
        const pos = p.curve.getPointAt(p.progress);
        p.mesh.position.copy(pos);
        p.mesh.material.color.set(p.color);
      });

      const affectedList = scenario?.affectedIds || [];
      alarmBeaconsRef.current.forEach((b) => {
        const isAffected = affectedList.includes(b.id);
        const isSelected = selId === b.id;
        if (isAffected) {
          b.mesh.material.color.set(scenario.severity === 'critical' ? '#ef4444' : '#f59e0b');
          b.mesh.material.opacity = 0.45 + 0.55 * Math.abs(Math.sin(elapsed * 6));
          const s = 1 + 0.35 * Math.sin(elapsed * 6);
          b.mesh.scale.set(s, s, s);
        } else if (isSelected) {
          b.mesh.material.color.set('#38bdf8');
          b.mesh.material.opacity = 0.85;
          b.mesh.scale.set(1, 1, 1);
        } else {
          b.mesh.material.opacity = 0;
        }
      });

      if (targetCameraPosRef.current && targetLookAtRef.current) {
        camera.position.lerp(targetCameraPosRef.current, 0.06);
        controls.target.lerp(targetLookAtRef.current, 0.06);
        if (camera.position.distanceTo(targetCameraPosRef.current) < 0.25) {
          targetCameraPosRef.current = null;
          targetLookAtRef.current = null;
        }
      }

      controls.update();
      renderer.render(scene, camera);

      labelUpdateCounter++;
      if (labelsOn && labelUpdateCounter % 2 === 0 && container) {
        const cw = container.clientWidth;
        const ch = container.clientHeight;
        const projected = EQUIPMENTS.map((eq) => {
          const vec = new THREE.Vector3(eq.position[0], eq.size[1] + 1.2, eq.position[2]);
          vec.project(camera);
          const x = (vec.x * 0.5 + 0.5) * cw;
          const y = (-(vec.y * 0.5) + 0.5) * ch;
          const visible = vec.z < 1 && x >= -40 && x <= cw + 40 && y >= -20 && y <= ch + 20;
          return {
            id: eq.id,
            tag: eq.tag,
            subsystem: eq.subsystem,
            x,
            y,
            visible,
            isAffected: affectedList.includes(eq.id)
          };
        });
        setLabelPositions(projected);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      controls.removeEventListener('start', stopAutoCamera);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectEquipment]);

  useEffect(() => {
    if (!selectedEquipmentId) return;
    const eq = EQUIPMENTS.find((item) => item.id === selectedEquipmentId);
    if (eq) {
      targetLookAtRef.current = new THREE.Vector3(eq.position[0], eq.size[1] * 0.45, eq.position[2]);
      targetCameraPosRef.current = new THREE.Vector3(
        eq.position[0] + 10,
        Math.max(eq.size[1] + 7, 12),
        eq.position[2] + 14
      );
    }
  }, [selectedEquipmentId]);

  useEffect(() => {
    if (!activeSubsystem) return;
    if (activeSubsystem === 'all') {
      targetCameraPosRef.current = new THREE.Vector3(0, 34, 48);
      targetLookAtRef.current = new THREE.Vector3(0, 4, 2);
    } else if (activeSubsystem.cameraPos && activeSubsystem.cameraTarget) {
      targetCameraPosRef.current = new THREE.Vector3(...activeSubsystem.cameraPos);
      targetLookAtRef.current = new THREE.Vector3(...activeSubsystem.cameraTarget);
    }
  }, [activeSubsystem, cameraResetTrigger]);

  return (
    <div ref={mountRef} className="relative w-full h-full select-none cursor-grab active:cursor-grabbing">
      {showLabels &&
        labelPositions.map(
          (lbl) =>
            lbl.visible && (
              <button
                key={lbl.id}
                onClick={() => onSelectEquipment(lbl.id)}
                style={{
                  transform: `translate(-50%, -50%) translate(${lbl.x}px, ${lbl.y}px)`
                }}
                className={`absolute top-0 left-0 px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-tight transition-colors shadow-md border ${
                  lbl.isAffected
                    ? 'bg-red-600/95 text-white border-red-300 animate-pulse z-20'
                    : selectedEquipmentId === lbl.id
                    ? 'bg-sky-500 text-slate-950 border-white z-20 scale-110'
                    : 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:border-sky-400 hover:text-sky-300 z-10'
                }`}
              >
                {lbl.tag}
              </button>
            )
        )}
    </div>
  );
}
