export const SUBSYSTEMS = [
  {
    id: 'washing',
    code: '720',
    name: '1. Hexane Washing (Tẩy rửa Hexane)',
    color: '#06b6d4',
    cameraPos: [-28, 18, 28],
    cameraTarget: [-26, 4, 8],
    summary:
      'Dung dịch Mother Liquor (ML) từ M-301A/B chứa hexane, low polymer, ethylene, comonomer, oligomer, tro và chloride được rửa bằng Xút 25 wt% (NaOH) và nước khử khoáng (DMW) ở 60°C, 0.2 kg/cm²G để loại bỏ tro và chloride trước khi tách low polymer.'
  },
  {
    id: 'stripping',
    code: '703',
    name: '2. Hexane Stripping (Chưng cất Hexane)',
    color: '#3b82f6',
    cameraPos: [-12, 24, 30],
    cameraTarget: [-10, 7, -4],
    summary:
      'Hexane thô từ D-701 được bơm P-702A/B cấp vào tháp T-703 (đáy 120°C, áp suất 3 kg/cm²G) nhờ gia nhiệt hơi MS qua E-703A/B. Hơi hexane đỉnh giảm áp qua PIC-721 xuống 0.2 kg/cm²G sang E-704; đáy T-703 giữ nồng độ low polymer ~10 wt%.'
  },
  {
    id: 'lowpolymer',
    code: '710/761',
    name: '3. Low Polymer Handling (Xử lý Low Polymer)',
    color: '#f97316',
    cameraPos: [10, 22, 32],
    cameraTarget: [8, 5, 10],
    summary:
      'Low polymer nóng chảy từ đáy T-703 được bơm P-711A/B nén lên 22 kg/cm²G, gia nhiệt lên 220°C qua E-711 rồi tách bay hơi 2 cấp qua D-711 (3 kg/cm²G, 160°C) và D-712 (chân không -0.39 kg/cm²G nhờ C-701, 180°C), sau đó tạo vảy qua Drum Flaker M-761A/B.'
  },
  {
    id: 'purification',
    code: '704',
    name: '4. Hexane Purification (Tinh chế Hexane)',
    color: '#10b981',
    cameraPos: [4, 24, -22],
    cameraTarget: [4, 7, -14],
    summary:
      'Hơi hexane từ T-703 và T-704 ngưng tụ tại E-704 chảy vào D-702. Lớp nước tách qua boot leg (LIC-732) tới Pit-732; lớp hexane bão hòa nước (~250 ppm wt) được bơm P-706A/B đưa lên đỉnh tháp tách nước T-704, giảm độ ẩm đáy xuống ≤ 10 wt ppm ở 80°C rồi làm mát về 40–43°C qua E-706 tới TK-702.'
  },
  {
    id: 'distribution',
    code: '708',
    name: '5. Pure Hexane Distribution (Phân phối Hexane)',
    color: '#22c55e',
    cameraPos: [26, 20, -22],
    cameraTarget: [24, 5, -14],
    summary:
      'Hexane tinh khiết trong TK-702 (≤ 10 wt ppm nước, seal Nitơ) được bơm cao áp P-708A/B nén ≥ 12 kg/cm²G qua bình sấy sàng phân tử D-703A/B để đạt độ ẩm < 5 wt ppm (max) và lọc qua F-704A/B phân phối tới các phân xưởng.'
  },
  {
    id: 'slop',
    code: '750',
    name: '6. Slop Hexane Recovery (Thu hồi Hexane thải)',
    color: '#eab308',
    cameraPos: [-28, 18, -22],
    cameraTarget: [-26, 4, -14],
    summary:
      'Chất lỏng lấy mẫu, bảo trì từ D-751/752 và cụm xúc tác D-110A/B, D-111, D-112 được đẩy bằng áp suất Nitơ về D-753, trung hòa bằng NaOH và chưng cất lôi cuốn hơi nước LS ở ~90°C. Hơi ngưng tại E-751, thu hồi về TK-703 hoặc D-701; bã polymer xả ra hố thải.'
  },
  {
    id: 'oligomer',
    code: '760',
    name: '7. Oligomer Cut System (Hệ thống cắt Oligomer)',
    color: '#a855f7',
    cameraPos: [28, 22, 16],
    cameraTarget: [26, 6, 4],
    summary:
      'Hexane ngưng tụ từ D-718 được cấp vào tháp T-761 (1.5 kg/cm²G, đáy 200–210°C nhờ HS qua E-761) để tách oligomer nặng (10 wt% hexane) làm mát qua E-764 về D-763 đi OSBL. Dòng cạnh giữa tháp (100–105°C) thu hồi hexane sạch; đỉnh tách butene-1 xả flare qua PIC-763.'
  },
  {
    id: 'phtreatment',
    code: '780',
    name: '8. pH Treatment Unit (Xử lý trung hòa pH)',
    color: '#ec4899',
    cameraPos: [-12, 16, 30],
    cameraTarget: [-14, 3, 20],
    summary:
      'Nước thải kiềm (pH > 12) từ hệ thống rửa Hexane được trung hòa 2 bậc bằng HCl 18% từ bồn D-781: Bậc 1 tại D-782 giảm pH xuống ~10 (AIC-781 điều chỉnh bơm P-782A/B); Bậc 2 tại D-783 giảm pH về 6–8 (AIC-782 điều chỉnh bơm P-784A/B) trước khi xả qua PIT-780 tới CWWT.'
  }
];

export const EQUIPMENTS = [
  // 1. HEXANE WASHING
  {
    id: 'M-721',
    tag: 'M-721',
    name: 'HX & NaOH Contactor',
    subsystem: 'washing',
    type: 'agitator_vessel',
    position: [-32, 0, 12],
    size: [2.2, 4.2, 2.2],
    color: '#0891b2',
    liquidColor: '#22d3ee',
    liquidLevel: 0.75,
    purpose: 'Khuấy trộn tiếp xúc pha giữa Mother Liquor (ML) với Xút 25 wt% (NaOH), nước DMW và hơi nước áp suất thấp (LS) để trung hòa và chiết tách tro, chloride.',
    principle: 'Cánh khuấy cơ khí tạo vùng rối cường độ cao duy trì pH > 12 và nhiệt độ 60°C (nhờ gia nhiệt hơi LS điều khiển bởi TV-705), chuyển hóa hợp chất chloride/xúc tác dư sang pha nước.',
    params: [
      { tag: 'TI-702', desc: 'Nhiệt độ dòng M-721 sang D-721', normal: '60 °C', limits: 'L: 50°C | H: 70°C' },
      { tag: 'FI-701', desc: 'Lưu lượng DMW/HW tới M-721', normal: '2.4 t/h', limits: 'L Alarm: 1.8 t/h' },
      { tag: 'FI-703', desc: 'Lưu lượng Caustic Soda (NaOH 25%)', normal: '35 kg/h', limits: 'L Alarm: 22.5 kg/h' },
      { tag: 'pH', desc: 'Độ pH tuần hoàn M-721', normal: '> 12.0', limits: 'Min: 12.0' }
    ]
  },
  {
    id: 'D-721',
    tag: 'D-721',
    name: 'HX & NaOH Separator',
    subsystem: 'washing',
    type: 'horizontal_drum',
    position: [-26, 0, 12],
    size: [5.2, 2.4, 2.4],
    color: '#0e7490',
    liquidColor: '#38bdf8',
    liquidLevel: 0.68,
    purpose: 'Bình lắng tách trọng lực phân chia pha Hexane rửa kiềm ở phía trên và pha nước thải chứa muối/tro ở phía dưới.',
    principle: 'Dựa trên chênh lệch tỷ trọng giữa Hexane (~0.66) và dung dịch kiềm nước (~1.05) ở 0.2 kg/cm²G, 60°C. Nước thải xả liên tục qua van LIC-701 (LV-701) sang cụm xử lý pH; Hexane chảy tràn sang M-722.',
    params: [
      { tag: 'PI-701', desc: 'Áp suất vận hành D-721', normal: '0.20 kg/cm²G', limits: 'L: 0.1 | H: 0.5 kg/cm²G' },
      { tag: 'LI-701-1/2', desc: 'Mức giao diện nước trong D-721', normal: '2350 mm', limits: 'L: 1420 | H: 3283 mm' },
      { tag: 'LI-702', desc: 'Mức Hexane trong D-721', normal: '4480 mm', limits: 'L: 4130 | H: 4850 mm' }
    ]
  },
  {
    id: 'M-722',
    tag: 'M-722',
    name: 'HX & Water Contactor',
    subsystem: 'washing',
    type: 'agitator_vessel',
    position: [-32, 0, 5],
    size: [2.2, 4.2, 2.2],
    color: '#0891b2',
    liquidColor: '#67e8f9',
    liquidLevel: 0.72,
    purpose: 'Rửa sạch lượng Xút (NaOH) còn cuốn theo trong dòng Hexane thô bằng nước khử khoáng (DMW).',
    principle: 'Khuấy trộn pha Hexane từ D-721 với DMW sạch ở 60°C để đưa pH dòng tuần hoàn về vùng trung tính (pH ~ 7–8), ngăn ngừa kiềm gây đóng cặn hoặc ăn mòn thiết bị chưng cất phía sau.',
    params: [
      { tag: 'TI-704', desc: 'Nhiệt độ dòng M-722 sang D-722', normal: '60 °C', limits: 'L: 50°C | H: 70°C' },
      { tag: 'FI-702', desc: 'Lưu lượng DMW/HW tới M-722', normal: '1.5 t/h', limits: 'L Alarm: 0.9 t/h' },
      { tag: 'pH', desc: 'Độ pH tuần hoàn M-722', normal: '7.5', limits: 'Range: 7.0 – 8.0' }
    ]
  },
  {
    id: 'D-722',
    tag: 'D-722',
    name: 'HX & Water Separator',
    subsystem: 'washing',
    type: 'horizontal_drum',
    position: [-26, 0, 5],
    size: [5.2, 2.4, 2.4],
    color: '#0e7490',
    liquidColor: '#7dd3fc',
    liquidLevel: 0.65,
    purpose: 'Tách nước rửa khỏi Hexane thô đã trung hòa trước khi cấp sang bồn chứa trung gian D-701.',
    principle: 'Phân lớp trọng lực ở 0.2 kg/cm²G, 60°C. Nước thải từ D-722 được tuần hoàn liên tục về đầu hút của M-721 qua LIC-703 (LV-703) để tiết kiệm nước DMW và tận dụng kiềm dư.',
    params: [
      { tag: 'LI-703', desc: 'Mức nước trong D-722', normal: '2150 mm', limits: 'L: 1420 | H: 2900 mm' },
      { tag: 'LI-704', desc: 'Mức Hexane trong D-722', normal: '4290 mm', limits: 'L: 3830 | H: 4750 mm' }
    ]
  },
  {
    id: 'P-721A/B',
    tag: 'P-721A/B',
    name: 'Washed Hexane Pump',
    subsystem: 'washing',
    type: 'pump',
    position: [-21, 0, 5],
    size: [2.0, 1.4, 1.6],
    color: '#0284c7',
    purpose: 'Bơm ly tâm vận chuyển Hexane thô đã rửa sạch từ D-722 sang bồn chứa Crude Hexane Feed Drum D-701.',
    principle: 'Gồm 2 bơm chạy/dự phòng (A/B). Duy trì cột áp ổn định đưa Hexane từ vùng áp thấp 0.2 kg/cm²G lên bồn đệm D-701, bảo vệ bằng liên động mức thấp D-722 chống xâm thực.',
    params: [
      { tag: 'XLAP721A/B', desc: 'Trạng thái vận hành bơm', normal: 'P-721A RUN / B STBY', limits: 'Auto-start standby' }
    ]
  },
  {
    id: 'D-701',
    tag: 'D-701',
    name: 'Crude Hexane Feed Drum',
    subsystem: 'washing',
    type: 'vertical_drum',
    position: [-18, 0, -2],
    size: [3.2, 7.5, 3.2],
    color: '#0369a1',
    liquidColor: '#38bdf8',
    liquidLevel: 0.62,
    purpose: 'Bồn đệm ổn định lưu lượng và thành phần nhập liệu Crude Hexane cấp cho tháp chưng cất T-703.',
    principle: 'Tiếp nhận Hexane thô từ P-721A/B, phần ngưng thu hồi từ D-714 và cụm Slop D-754. Cung cấp cột áp hút dương (NPSH) ổn định cho bơm cấp tháp P-702A/B.',
    params: [
      { tag: 'LI-711', desc: 'Mức chất lỏng trong D-701', normal: '4450 mm', limits: 'L: 890 | H: 8010 mm' }
    ]
  },

  // 2. HEXANE STRIPPING
  {
    id: 'P-702A/B',
    tag: 'P-702A/B',
    name: 'Crude Hexane Feed Pump',
    subsystem: 'stripping',
    type: 'pump',
    position: [-14, 0, -2],
    size: [2.0, 1.4, 1.6],
    color: '#2563eb',
    purpose: 'Bơm cấp liệu Hexane thô từ bồn D-701 vào tháp chưng cất Hexane Stripper T-703.',
    principle: 'Nâng áp dòng nhập liệu vượt áp suất vận hành 3 kg/cm²G của tháp T-703, điều chỉnh lưu lượng qua van điều khiển FV-712.',
    params: [
      { tag: 'FV-712', desc: 'Độ mở van cấp liệu T-703', normal: '62 %', limits: 'Interlock LL D-701' }
    ]
  },
  {
    id: 'T-703',
    tag: 'T-703',
    name: 'Hexane Stripper Tower',
    subsystem: 'stripping',
    type: 'tower',
    position: [-9, 0, -5],
    size: [3.4, 16.5, 3.4],
    color: '#1d4ed8',
    liquidColor: '#60a5fa',
    liquidLevel: 0.45,
    purpose: 'Tháp chưng cất chính tách bay hơi Hexane tinh khiết lên đỉnh và cô đặc Low Polymer nóng chảy ở đáy tới nồng độ ~10 wt%.',
    principle: 'Vận hành ở nhiệt độ đáy 120°C và áp suất đỉnh 3 kg/cm²G. Nhiệt hóa hơi cung cấp bởi Reboiler E-703A/B (hơi MS). Hơi đỉnh giảm áp qua PIC-721 xuống 0.2 kg/cm²G tới E-704; dòng hồi lưu kiểm soát qua FV-736.',
    params: [
      { tag: 'PIC-721', desc: 'Áp suất đỉnh tháp T-703', normal: '3.0 kg/cm²G', limits: 'L: 1.0 | H: 4.0 | HH: 4.5' },
      { tag: 'LIC-721', desc: 'Mức lỏng đáy tháp T-703', normal: '1000 mm', limits: 'LL: 450 | L: 600 | H: 1400 | HH: 1800' },
      { tag: 'PDI-732', desc: 'Chênh áp qua các đĩa T-703', normal: '420 mmAq', limits: 'H Alarm: 800 mmAq' },
      { tag: 'T-BOT', desc: 'Nhiệt độ & nồng độ LP đáy', normal: '120 °C / 10 wt%', limits: 'Control by FV-721 & FIC-722' }
    ]
  },
  {
    id: 'E-703A/B',
    tag: 'E-703A/B',
    name: 'Crude Hexane Reboiler',
    subsystem: 'stripping',
    type: 'exchanger',
    position: [-5, 0, -8],
    size: [4.6, 2.0, 2.2],
    color: '#dc2626',
    purpose: 'Bộ đun sôi đáy tháp T-703, cung cấp nhiệt hóa hơi Hexane để duy trì nhiệt độ đáy 120°C.',
    principle: 'Thiết bị trao đổi nhiệt ống chùm (Shell & Tube): Hơi nước áp suất trung bình (MS) đi phía vỏ (Shell side) điều tiết qua FV-721; dung dịch đáy T-703 được tuần hoàn cưỡng bức qua phía ống nhờ bơm P-705A/B. Nước ngưng thu về D-784A/B.',
    params: [
      { tag: 'FV-721', desc: 'Van điều khiển hơi MS vào E-703A/B', normal: '58 %', limits: 'Close on LIC-721 LL' },
      { tag: 'LIC-725A/B', desc: 'Mức nước ngưng tại D-784A/B', normal: '1100 mm', limits: 'L: 250 | H: 2000 mm' }
    ]
  },
  {
    id: 'P-705A/B',
    tag: 'P-705A/B',
    name: 'Stripper Bottom Pump',
    subsystem: 'stripping',
    type: 'pump',
    position: [-5, 0, -4],
    size: [2.0, 1.4, 1.6],
    color: '#2563eb',
    purpose: 'Bơm tuần hoàn cưỡng bức dung dịch đáy tháp T-703 qua Reboiler E-703A/B.',
    principle: 'Tạo vận tốc dòng chảy cao qua ống trao đổi nhiệt E-703A/B nhằm tăng hệ số truyền nhiệt và ngăn ngừa polymer bám cặn (fouling) trên bề mặt ống.',
    params: [
      { tag: 'FLOW', desc: 'Chế độ tuần hoàn đáy T-703', normal: 'Forced Circulation', limits: 'Prevent tube fouling' }
    ]
  },

  // 3. LOW POLYMER HANDLING
  {
    id: 'P-711A/B',
    tag: 'P-711A/B',
    name: 'Flash Drum Feed Pump',
    subsystem: 'lowpolymer',
    type: 'pump',
    position: [-3, 0, 2],
    size: [2.0, 1.4, 1.6],
    color: '#ea580c',
    purpose: 'Bơm tăng áp dung dịch Low Polymer 10 wt% từ đáy T-703 lên 22 kg/cm²G để cấp vào cụm tách bay hơi nhanh (Flash).',
    principle: 'Nén dung dịch polymer nóng chảy ở 120°C lên áp suất cao 22 kg/cm²G (kiểm soát lưu lượng bởi FIC-722) để giữ Hexane ở trạng thái lỏng quá nhiệt khi đi qua bộ gia nhiệt E-711.',
    params: [
      { tag: 'PIC-723', desc: 'Áp suất đầu đẩy P-711A/B', normal: '22.0 kg/cm²G', limits: 'H Alarm: 30.0 kg/cm²G' },
      { tag: 'FIC-722', desc: 'Lưu lượng cấp tới D-711', normal: '14.5 t/h', limits: 'L: SP-10% | H: SP+10%' }
    ]
  },
  {
    id: 'E-711',
    tag: 'E-711',
    name: 'Flash Preheater',
    subsystem: 'lowpolymer',
    type: 'exchanger',
    position: [1, 0, 2],
    size: [4.5, 1.9, 1.9],
    color: '#ef4444',
    purpose: 'Gia nhiệt dung dịch Low Polymer từ 120°C lên 220°C trước khi giảm áp vào bồn Flash cấp 1 D-711.',
    principle: 'Sử dụng hơi nước áp suất cao (HS) phía vỏ điều khiển bởi TIC-724 (van TV-724). Nước ngưng HS xả về bồn D-715 (LIC-727: 250–1160 mm).',
    params: [
      { tag: 'TI-729', desc: 'Nhiệt độ dòng ra E-711 vào D-711', normal: '215 °C', limits: 'L: 180°C | H: 220°C' },
      { tag: 'LIC-727', desc: 'Mức nước ngưng D-715', normal: '700 mm', limits: 'L: 250 | H: 1160 mm' }
    ]
  },
  {
    id: 'D-711',
    tag: 'D-711',
    name: '1st Flash Drum',
    subsystem: 'lowpolymer',
    type: 'vertical_drum',
    position: [6, 0, 2],
    size: [3.0, 7.2, 3.0],
    color: '#d97706',
    liquidColor: '#fb923c',
    liquidLevel: 0.55,
    purpose: 'Tách bay hơi nhanh (Flash) phần lớn Hexane ra khỏi Low Polymer nóng chảy ở cấp áp suất 3 kg/cm²G.',
    principle: 'Dung dịch 220°C, 22 kg/cm²G giảm áp đột ngột xuống 3 kg/cm²G khi vào D-711, làm Hexane hóa hơi tức thời (hồi lưu về T-703) và hạ nhiệt độ pha lỏng xuống ~160°C. Cuộn ống hơi MS bên trong giữ polymer không bị đông đặc.',
    params: [
      { tag: 'PI-711/730', desc: 'Áp suất đỉnh D-711', normal: '3.0 kg/cm²G', limits: 'H: 4.0 | HH (PZI-722): 4.6' },
      { tag: 'TI-726', desc: 'Nhiệt độ Low Polymer trong D-711', normal: '165 °C', limits: 'L: 160°C | H: 180°C' },
      { tag: 'LIC-722', desc: 'Mức Low Polymer trong D-711', normal: '2200 mm', limits: 'L: 1075 | H: 3450 mm' }
    ]
  },
  {
    id: 'E-712',
    tag: 'E-712',
    name: 'Low Polymer Preheater',
    subsystem: 'lowpolymer',
    type: 'exchanger',
    position: [10, 0, 5],
    size: [4.2, 1.8, 1.8],
    color: '#dc2626',
    purpose: 'Gia nhiệt bổ sung dòng Low Polymer từ D-711 lên 180°C trước khi vào bồn tách chân không D-712.',
    principle: 'Gia nhiệt bằng hơi cao áp HS qua van TV-728 để bù nhiệt ẩn hóa hơi cho giai đoạn tách chân không sâu kế tiếp, tránh đông cứng polymer trong ống.',
    params: [
      { tag: 'PI-726', desc: 'Áp suất đầu vào E-712', normal: '2.5 kg/cm²G', limits: 'H Alarm: 4.0 kg/cm²G' },
      { tag: 'TEMP-OUT', desc: 'Nhiệt độ đầu ra E-712', normal: '180 °C', limits: 'Controlled by TV-728' }
    ]
  },
  {
    id: 'D-712',
    tag: 'D-712',
    name: '2nd Flash Drum (Vacuum)',
    subsystem: 'lowpolymer',
    type: 'vertical_drum',
    position: [15, 0, 5],
    size: [3.2, 7.6, 3.2],
    color: '#b45309',
    liquidColor: '#f97316',
    liquidLevel: 0.52,
    purpose: 'Tách triệt để lượng Hexane hòa tan còn lại trong Low Polymer dưới điều kiện chân không sâu (-0.39 kg/cm²G).',
    principle: 'Duy trì áp suất chân không -0.39 kg/cm²G nhờ bơm chân không vòng chất lỏng C-701. Hơi Hexane hút lên đỉnh qua E-713 vào D-714; Low Polymer sạch được bơm P-713A/B chuyển sang bồn chứa D-717.',
    params: [
      { tag: 'PIC-724', desc: 'Áp suất chân không D-712 / C-701', normal: '-0.39 kg/cm²G', limits: 'LL (PZI-724-2): -0.6 | H: -0.2' },
      { tag: 'TI-730', desc: 'Nhiệt độ vận hành D-712', normal: '180 °C', limits: 'L: 170°C | H: 200°C' },
      { tag: 'LIC-723', desc: 'Mức Low Polymer trong D-712', normal: '2400 mm', limits: 'H: 3380 | HH (LZA-723): 3800' }
    ]
  },
  {
    id: 'C-701',
    tag: 'C-701',
    name: 'LP Vacuum Pump & D-713/E-713/D-714',
    subsystem: 'lowpolymer',
    type: 'pump',
    position: [15, 0, 10],
    size: [2.6, 1.8, 2.0],
    color: '#c2410c',
    purpose: 'Tạo chân không -0.39 kg/cm²G cho D-712 và thu hồi ngưng tụ hơi Hexane qua E-713, D-714, D-713.',
    principle: 'Bơm chân không C-701 hút hơi từ D-712, đẩy qua Vent Gas Cooler E-713 để ngưng tụ Hexane vào bồn D-714 (rồi chuyển về D-701 hoặc D-718). Khí không ngưng qua D-713 kiểm soát hàm lượng Oxy (AZI-701 < 3000 ppm) trước khi ra LP Flare.',
    params: [
      { tag: 'TZA-721', desc: 'Nhiệt độ nước làm mát hồi CWR C-701', normal: '38 °C', limits: 'H: 45°C | HH: 50°C' },
      { tag: 'LIC-724', desc: 'Mức Hexane trong D-714', normal: '550 mm', limits: 'H: 900 | HH (LZI-726): 1000' },
      { tag: 'AZI-701', desc: 'Nồng độ Oxy đầu ra D-713', normal: '450 ppm', limits: 'H: 3000 | HH: 4000 ppm' }
    ]
  },
  {
    id: 'D-717',
    tag: 'D-717',
    name: 'LP Holding Drum',
    subsystem: 'lowpolymer',
    type: 'vertical_drum',
    position: [10, 0, 13],
    size: [2.8, 6.4, 2.8],
    color: '#9a3412',
    liquidColor: '#fdba74',
    liquidLevel: 0.6,
    purpose: 'Bồn chứa đệm Low Polymer nóng chảy đã tách sạch Hexane để cấp ổn định cho hệ thống tạo vảy Drum Flaker M-761A/B.',
    principle: 'Nhận dòng từ bơm P-713A/B (có áo gia nhiệt hơi HS chống đông) và cấp cho M-761A/B qua bơm đáy P-717A/B.',
    params: [
      { tag: 'LI-781', desc: 'Mức Low Polymer trong D-717', normal: '1900 mm', limits: 'L: 816 | H: 3000 | HH: 3450' },
      { tag: 'PZI-782', desc: 'Cảnh báo áp suất cao D-717', normal: '0.15 kg/cm²G', limits: 'HH Alarm: 0.4 kg/cm²G' }
    ]
  },
  {
    id: 'M-761A/B',
    tag: 'M-761A/B',
    name: 'Drum Flaker, Crusher ZZ-761 & Conveyor FD-762',
    subsystem: 'lowpolymer',
    type: 'flaker',
    position: [16, 0, 16],
    size: [5.4, 3.2, 3.0],
    color: '#7c2d12',
    purpose: 'Làm nguội hóa rắn Low Polymer nóng chảy thành tấm mỏng, nghiền thành vảy (flake) và đóng bao Big Bag.',
    principle: 'Trống quay M-761A/B làm mát bằng nước (TZI-795A/B < 47°C) và làm trơ bằng khí Nitơ LN (FZI-7067A/B). Tấm polymer rắn được dao gạt xuống máy nghiền ZZ-761A/B và băng tải trục vít FD-762A/B đưa tới trạm cân đóng bao.',
    params: [
      { tag: 'TZI-797A/B', desc: 'Nhiệt độ chảo nóng chảy M-761A/B', normal: '155 °C', limits: 'L: 135°C | LL: 125°C' },
      { tag: 'TZI-795A/B', desc: 'Nhiệt độ nước làm mát trống quay', normal: '36 °C', limits: 'H: 47°C | HH: 52°C' },
      { tag: 'AZI-761A/B', desc: 'Hàm lượng Oxy khí Vent M-761A/B', normal: '0.8 %', limits: 'H: 3.0% | HH: 5.0%' }
    ]
  },

  // 4. HEXANE PURIFICATION
  {
    id: 'E-704',
    tag: 'E-704 & E-708',
    name: 'Overhead Condenser & Vent Condenser',
    subsystem: 'purification',
    type: 'exchanger',
    position: [-4, 0, -14],
    size: [5.0, 2.2, 2.2],
    color: '#059669',
    purpose: 'Ngưng tụ hơi Hexane đỉnh từ T-703 và T-704; tách khí nhẹ không ngưng (ethylene, comonomer, N2) qua E-708.',
    principle: 'Hơi Hexane ngưng tụ trong E-704 đi qua ống chữ U (U-seal) chảy tự nhiên vào D-702. Khí không ngưng đi lên đỉnh E-704 vào E-708 làm lạnh xuống 5°C trước khi xả ra LP Flare qua PIC-731 (chú ý tránh đóng băng tại E-708).',
    params: [
      { tag: 'FZA-732', desc: 'Lưu lượng nước làm mát hồi CWR E-704', normal: '620 t/h', limits: 'L: 500 | LL: 475 t/h' },
      { tag: 'TI-736', desc: 'Nhiệt độ pha hơi E-704 (chống tích tụ C4=)', normal: '74 °C', limits: '< 70°C: Bổ sung N2 vào E-704' }
    ]
  },
  {
    id: 'D-702',
    tag: 'D-702',
    name: 'Stripper Receiver',
    subsystem: 'purification',
    type: 'horizontal_drum',
    position: [2, 0, -14],
    size: [5.2, 2.4, 2.4],
    color: '#047857',
    liquidColor: '#34d399',
    liquidLevel: 0.65,
    purpose: 'Bình chứa ngưng tụ Hexane đỉnh và tách sơ bộ nước tự do qua chân lắng (Boot leg).',
    principle: 'Vận hành ở 0.2 kg/cm²G nhờ điều áp Nitơ PIC-731. Lớp nước lắng ở Boot leg xả về Pit-732 qua LIC-732-1/2; lớp Hexane bão hòa nước (~250 ppm wt) được bơm P-706A/B cấp sang tháp tách nước T-704.',
    params: [
      { tag: 'PIC-731', desc: 'Áp suất đỉnh D-702', normal: '0.20 kg/cm²G', limits: 'H Alarm: 0.5 kg/cm²G' },
      { tag: 'LIC-731', desc: 'Mức Hexane trong D-702', normal: '1950 mm', limits: 'L: 350 | H: 3478 mm' },
      { tag: 'LIC-732-1/2', desc: 'Mức nước trong Boot leg D-702', normal: '580 mm', limits: 'L: 350 | H: 840 mm' }
    ]
  },
  {
    id: 'P-706A/B',
    tag: 'P-706A/B',
    name: 'Dehydrator Feed Pump',
    subsystem: 'purification',
    type: 'pump',
    position: [6, 0, -14],
    size: [2.0, 1.4, 1.6],
    color: '#10b981',
    purpose: 'Bơm cấp Hexane bão hòa nước (~250 ppm wt) từ D-702 lên đỉnh tháp tách nước T-704.',
    principle: 'Điều chỉnh lưu lượng qua van LV-731 theo mức của D-702 (LIC-731).',
    params: [
      { tag: 'LV-731', desc: 'Van điều khiển cấp liệu T-704', normal: '55 %', limits: 'Controlled by LIC-731' }
    ]
  },
  {
    id: 'T-704',
    tag: 'T-704 & E-705/E-706',
    name: 'Hexane Dehydrator Tower',
    subsystem: 'purification',
    type: 'tower',
    position: [11, 0, -14],
    size: [2.8, 14.5, 2.8],
    color: '#065f46',
    liquidColor: '#10b981',
    liquidLevel: 0.5,
    purpose: 'Tháp chưng cất tách nước đẳng phí đưa hàm lượng nước trong Hexane từ ~250 ppm xuống ≤ 10 wt ppm.',
    principle: 'Vận hành ở 0.2 kg/cm²G, đáy 80°C nhờ Reboiler E-705 (hơi LS qua FIC-734). Hỗn hợp hơi đẳng phí Hexane-Nước bay lên đỉnh hồi về E-704/D-702. Hexane khô ở đáy được bơm P-707A/B đẩy qua bộ làm mát E-706 xuống 40–43°C tới TK-702.',
    params: [
      { tag: 'LIC-733', desc: 'Mức lỏng đáy tháp T-704', normal: '1150 mm', limits: 'L: 400 | H: 1900 mm' },
      { tag: 'FI-735', desc: 'Lưu lượng đáy T-704 tới E-706', normal: '42.0 t/h', limits: 'L Alarm: 32.49 t/h' },
      { tag: 'AI-205-2', desc: 'Hàm lượng nước đầu ra T-704', normal: '6.5 ppm', limits: 'Target ≤ 10 | H: 15 ppm' },
      { tag: 'LIC-726', desc: 'Mức nước ngưng D-785 (từ E-705)', normal: '850 mm', limits: 'L: 250 | H: 1600 mm' }
    ]
  },

  // 5. PURE HEXANE DISTRIBUTION
  {
    id: 'TK-702',
    tag: 'TK-702',
    name: 'Pure Hexane Tank',
    subsystem: 'distribution',
    type: 'tank',
    position: [20, 0, -14],
    size: [5.4, 7.0, 5.4],
    color: '#15803d',
    liquidColor: '#4ade80',
    liquidLevel: 0.72,
    purpose: 'Bể chứa Hexane tinh khiết (độ ẩm ≤ 10 wt ppm) được phủ khí trơ Nitơ (N2 Blanketing).',
    principle: 'Duy trì áp suất dương nhẹ bằng hệ thống van điều áp Nitơ PV-741-1 (cấp N2) và PV-741-2 (xả LF) nhằm ngăn không khí và hơi ẩm xâm nhập.',
    params: [
      { tag: 'PIC-741', desc: 'Áp suất khí phủ N2 trong TK-702', normal: '220 mmAq', limits: 'H Alarm: 500 mmAq' },
      { tag: 'LI-741', desc: 'Mức Hexane trong TK-702', normal: '6100 mm', limits: 'L: 420 | H: 9440 | HH: 9650' }
    ]
  },
  {
    id: 'P-708A/B',
    tag: 'P-708A/B',
    name: 'HP Hexane Pump',
    subsystem: 'distribution',
    type: 'pump',
    position: [26, 0, -14],
    size: [2.2, 1.5, 1.8],
    color: '#16a34a',
    purpose: 'Bơm cao áp tăng áp suất Hexane tinh khiết lên ≥ 12 kg/cm²G để cấp qua cụm sấy và phân phối toàn phân xưởng.',
    principle: 'Tạo cột áp cao đẩy Hexane qua lớp sàng phân tử D-703A/B, bộ lọc F-704A/B, cung cấp hồi lưu FV-736 cho T-703 và dung môi cho cụm phản ứng.',
    params: [
      { tag: 'P-DISCH', desc: 'Áp suất đầu đẩy P-708A/B', normal: '13.5 kg/cm²G', limits: 'Min: 12.0 kg/cm²G' }
    ]
  },
  {
    id: 'D-703A/B',
    tag: 'D-703A/B & F-704A/B',
    name: 'Hexane Dryer & Strainer',
    subsystem: 'distribution',
    type: 'vertical_drum',
    position: [31, 0, -14],
    size: [2.6, 6.8, 2.6],
    color: '#166534',
    liquidColor: '#86efac',
    liquidLevel: 0.85,
    purpose: 'Hấp phụ sâu độ ẩm còn lại xuống < 5 wt ppm (tối đa) và lọc sạch hạt rắn trước khi cấp vào lò phản ứng.',
    principle: 'Hai tháp D-703A/B chứa hạt sàng phân tử (Molecular Sieve) vận hành luân phiên hấp phụ/tái sinh, kết hợp bộ lọc tinh F-704A/B bảo vệ xúc tác phản ứng khỏi ngộ độc ẩm.',
    params: [
      { tag: 'MOISTURE', desc: 'Độ ẩm đầu ra D-703A/B', normal: '2.1 wt ppm', limits: 'Max: < 5.0 wt ppm' }
    ]
  },

  // 6. SLOP HEXANE RECOVERY
  {
    id: 'D-751/752',
    tag: 'D-751 & D-752',
    name: 'Drainage Drums',
    subsystem: 'slop',
    type: 'horizontal_drum',
    position: [-30, 0, -14],
    size: [3.8, 1.8, 1.8],
    color: '#ca8a04',
    liquidColor: '#fde047',
    liquidLevel: 0.5,
    purpose: 'Thu gom chất lỏng chứa Hexane và polymer từ quá trình lấy mẫu phân tích và xả bảo trì thiết bị.',
    principle: 'Khi mức chất lỏng đạt ngưỡng quy định, sử dụng áp suất khí Nitơ để đẩy toàn bộ sang bình chưng cất thu hồi D-753 (cùng với dòng xả từ cụm xúc tác D-110A/B, D-111, D-112).',
    params: [
      { tag: 'TRANSFER', desc: 'Phương thức vận chuyển', normal: 'Nitrogen Pressure', limits: 'Batch transfer to D-753' }
    ]
  },
  {
    id: 'D-753',
    tag: 'D-753 & E-751/D-754',
    name: 'Slop Hexane Stripper & Condenser',
    subsystem: 'slop',
    type: 'agitator_vessel',
    position: [-24, 0, -14],
    size: [3.0, 5.8, 3.0],
    color: '#a16207',
    liquidColor: '#facc15',
    liquidLevel: 0.58,
    purpose: 'Trung hòa xúc tác dư bằng NaOH và chưng cất thu hồi Hexane từ hỗn hợp thải ở ~90°C.',
    principle: 'Khuấy trộn trung hòa bằng NaOH sẵn có trong bồn, sục hơi nước áp suất thấp (LS qua FIC-751) ở 90°C. Hơi Hexane-nước ngưng tụ ở 40°C tại E-751 vào D-754 và bơm P-754 chuyển về TK-703 hoặc D-701; bã polymer nguội xả ra hố thải.',
    params: [
      { tag: 'FIC-751', desc: 'Nhiệt độ Steam Stripping D-753', normal: '90 °C', limits: 'E-751 outlet: 40 °C' }
    ]
  },
  {
    id: 'TK-703',
    tag: 'TK-703',
    name: 'Make-up Hexane Tank',
    subsystem: 'slop',
    type: 'tank',
    position: [-18, 0, -14],
    size: [5.0, 6.8, 5.0],
    color: '#854d0e',
    liquidColor: '#fef08a',
    liquidLevel: 0.68,
    purpose: 'Bể chứa Hexane bổ sung (Make-up) nhập từ ngoài và Hexane thu hồi từ cụm Slop D-754.',
    principle: 'Được phủ khí Nitơ (PIC-711) và trang bị hệ thống xả nước đáy định kỳ tránh nước cuốn theo vào khu vực 700.',
    params: [
      { tag: 'PIC-711', desc: 'Áp suất khí phủ N2 TK-703', normal: '200 mmAq', limits: 'H Alarm: 500 mmAq' },
      { tag: 'LI-714', desc: 'Mức Hexane trong TK-703', normal: '5200 mm', limits: 'L: 270 | H: 9440 | HH: 9650' }
    ]
  },

  // 7. OLIGOMER CUT SYSTEM
  {
    id: 'D-718',
    tag: 'D-718 & D-761',
    name: 'Oligomer Cut Feed Drums',
    subsystem: 'oligomer',
    type: 'horizontal_drum',
    position: [21, 0, 6],
    size: [4.2, 2.0, 2.0],
    color: '#9333ea',
    liquidColor: '#c084fc',
    liquidLevel: 0.6,
    purpose: 'Tích trữ Hexane ngưng tụ từ cụm Flash D-714 có chứa tạp chất Oligomer để cấp cho tháp cắt Oligomer T-761.',
    principle: 'Vận hành theo mẻ (batchwise) trong các chiến dịch sản xuất grade nối tiếp (series grade) khi hàm lượng oligomer vượt mục tiêu (ví dụ > 2.5% đối với MCI).',
    params: [
      { tag: 'LIC-782', desc: 'Mức chất lỏng trong D-718', normal: '950 mm', limits: 'L: 350 | H: 1560 mm' },
      { tag: 'LI-787', desc: 'Mức chất lỏng trong D-761', normal: '1100 mm', limits: 'L: 186 | H: 2120 mm' }
    ]
  },
  {
    id: 'T-761',
    tag: 'T-761 & E-761',
    name: 'Oligomer Cut Tower',
    subsystem: 'oligomer',
    type: 'tower',
    position: [26, 0, 4],
    size: [2.8, 15.0, 2.8],
    color: '#7e22ce',
    liquidColor: '#a855f7',
    liquidLevel: 0.48,
    purpose: 'Tháp chưng cất phân đoạn tách Oligomer nặng ở đáy, thu hồi Hexane sạch ở dòng cạnh giữa tháp và tách Butene-1 ở đỉnh.',
    principle: 'Vận hành ở 1.5 kg/cm²G, đáy 200–210°C nhờ Reboiler E-761 (hơi HS qua FIC-766). Đáy chứa ~10 wt% hexane làm mát qua E-764 về ≤ 40°C vào D-763 đi OSBL. Dòng cạnh giữa tháp (100–105°C) qua E-765 vào D-764 thu hồi Hexane.',
    params: [
      { tag: 'PZI-753', desc: 'Áp suất đỉnh tháp T-761', normal: '1.50 kg/cm²G', limits: 'HH Alarm: 1.80 kg/cm²G' },
      { tag: 'TI-789/790', desc: 'Nhiệt độ đỉnh & giữa tháp T-761', normal: '97 °C / 103 °C', limits: '789: 87–107 | 790: 93–113' },
      { tag: 'TI-791/792', desc: 'Nhiệt độ dưới & đáy tháp T-761', normal: '175 °C / 185 °C', limits: '791: 165–185 | 792: 170–190' },
      { tag: 'LIC-790', desc: 'Mức lỏng đáy tháp T-761', normal: '950 mm', limits: 'L: 400 | H: 1500 mm' }
    ]
  },
  {
    id: 'D-762/763/764',
    tag: 'D-762, D-763 & D-764',
    name: 'Oligomer Receivers & Condensers',
    subsystem: 'oligomer',
    type: 'horizontal_drum',
    position: [31, 0, 4],
    size: [4.6, 2.1, 2.1],
    color: '#6b21a8',
    liquidColor: '#d8b4fe',
    liquidLevel: 0.55,
    purpose: 'Hệ thống bình chứa sản phẩm đỉnh (D-762), sản phẩm cạnh Hexane sạch (D-764) và Oligomer đáy (D-763).',
    principle: 'Hơi đỉnh T-761 ngưng tụ tại E-762 vào D-762 (PIC-763 xả khí giàu Butene-1 ra Flare; Boot leg tách nước qua LV-789). Oligomer từ D-763 được bơm P-763A/B chuyển ra OSBL.',
    params: [
      { tag: 'PIC-763', desc: 'Áp suất D-762 (xả Butene-1)', normal: '1.50 kg/cm²G', limits: 'H Alarm: 1.70 kg/cm²G' },
      { tag: 'LIC-788', desc: 'Mức Hexane trong D-762', normal: '800 mm', limits: 'L: 250 | H: 1350 mm' },
      { tag: 'LI-791/792', desc: 'Mức D-764 (HC) / D-763 (Oligomer)', normal: '1100 / 1300 mm', limits: '764: 600–1600 | 763: 300–2350' }
    ]
  },

  // 8. pH TREATMENT UNIT
  {
    id: 'D-781',
    tag: 'D-781',
    name: '18% HCl Acid Drum',
    subsystem: 'phtreatment',
    type: 'vertical_drum',
    position: [-20, 0, 20],
    size: [2.4, 5.2, 2.4],
    color: '#be185d',
    liquidColor: '#f472b6',
    liquidLevel: 0.78,
    purpose: 'Bồn chứa axit Clohydric (HCl 18%) cung cấp tác nhân trung hòa cho 2 bậc xử lý nước thải kiềm.',
    principle: 'Cấp axit cho 2 cụm bơm định lượng điều khiển bằng servomotor P-782A/B (vào D-782) và P-784A/B (vào D-783).',
    params: [
      { tag: 'LI-785', desc: 'Mức axit HCl 18% trong D-781', normal: '1150 mm', limits: 'LL: 200 | L: 400 | H: 1700' }
    ]
  },
  {
    id: 'D-782',
    tag: 'D-782 & P-782A/B',
    name: 'No.1 pH Treatment Drum',
    subsystem: 'phtreatment',
    type: 'agitator_vessel',
    position: [-14, 0, 20],
    size: [2.6, 4.8, 2.6],
    color: '#db2777',
    liquidColor: '#f9a8d4',
    liquidLevel: 0.7,
    purpose: 'Trung hòa bậc 1 giảm độ pH của nước thải từ cụm rửa Hexane từ > 12 xuống khoảng 10.',
    principle: 'Bộ phân tích pH đầu ra AIC-781 tự động điều chỉnh hành trình servomotor của bơm axit P-782A/B để khống chế pH ~ 10.',
    params: [
      { tag: 'AI-781', desc: 'Độ pH đầu ra D-782', normal: '10.0 pH', limits: 'L: 6.0 | H: 13.5 pH' }
    ]
  },
  {
    id: 'D-783',
    tag: 'D-783 & P-784A/B',
    name: 'No.2 pH Treatment Drum & PIT-780',
    subsystem: 'phtreatment',
    type: 'agitator_vessel',
    position: [-8, 0, 20],
    size: [2.6, 4.8, 2.6],
    color: '#ec4899',
    liquidColor: '#fbcfe8',
    liquidLevel: 0.7,
    purpose: 'Trung hòa bậc 2 đưa độ pH nước thải từ 10 về dải trung tính 6–8 đạt chuẩn xả tới CWWT.',
    principle: 'AIC-782 giám sát đầu ra và điều khiển servomotor bơm P-784A/B. Nước thải sau xử lý đi qua hố kiểm soát PIT-780 (có đầu dò khí cháy AZIG-72) sang hệ thống xử lý nước thải tập trung CWWT.',
    params: [
      { tag: 'AI-782/783', desc: 'Độ pH đầu ra D-783', normal: '7.2 pH', limits: 'Range: 6.0 – 8.0 (H: 10)' },
      { tag: 'AZIG-72', desc: 'Đầu dò khí dễ cháy tại PIT-780', normal: '0 ppm', limits: 'Alarm on Hexane carry-over' }
    ]
  }
];

export const PIPELINES = [
  // Hexane Washing flow
  { id: 'pipe-ml-in', points: [[-38, 3.5, 12], [-32, 3.5, 12]], color: '#06b6d4', medium: 'Mother Liquor (ML from M-301A/B)', subsystem: 'washing' },
  { id: 'pipe-m721-d721', points: [[-32, 3.2, 12], [-26, 2.2, 12]], color: '#22d3ee', medium: 'ML + NaOH 25% + DMW (60°C, pH>12)', subsystem: 'washing' },
  { id: 'pipe-d721-m722', points: [[-26, 2.5, 10.8], [-32, 3.2, 5]], color: '#38bdf8', medium: 'Washed Crude Hexane', subsystem: 'washing' },
  { id: 'pipe-m722-d722', points: [[-32, 2.5, 5], [-26, 2.2, 5]], color: '#67e8f9', medium: 'Hexane + DMW (pH 7-8)', subsystem: 'washing' },
  { id: 'pipe-ww-recycle', points: [[-26, 0.5, 5], [-29, 0.5, 8.5], [-32, 1.0, 12]], color: '#a855f7', medium: 'WW Recycle via LIC-703', subsystem: 'washing' },
  { id: 'pipe-d722-p721', points: [[-23.5, 1.5, 5], [-21, 1.0, 5]], color: '#0284c7', medium: 'Washed Hexane Suction', subsystem: 'washing' },
  { id: 'pipe-p721-d701', points: [[-21, 1.4, 5], [-18, 4.5, 5], [-18, 5.5, -2]], color: '#3b82f6', medium: 'Crude Hexane to D-701', subsystem: 'washing' },

  // Stripping flow
  { id: 'pipe-d701-p702', points: [[-18, 0.8, -2], [-14, 0.8, -2]], color: '#2563eb', medium: 'Crude Hexane Suction', subsystem: 'stripping' },
  { id: 'pipe-p702-t703', points: [[-14, 1.4, -2], [-12, 8.0, -2], [-9, 8.0, -5]], color: '#3b82f6', medium: 'T-703 Feed (FV-712)', subsystem: 'stripping' },
  { id: 'pipe-t703-e703', points: [[-9, 1.0, -5], [-5, 1.0, -4], [-5, 1.2, -8], [-9, 3.0, -5]], color: '#ef4444', medium: 'Reboiler Forced Circulation (P-705A/B)', subsystem: 'stripping' },
  { id: 'pipe-t703-ovh', points: [[-9, 16.5, -5], [-9, 17.5, -14], [-4, 2.5, -14]], color: '#34d399', medium: 'Hexane Vapor (3 -> 0.2 kg/cm²G via PIC-721)', subsystem: 'stripping' },

  // Low Polymer Handling
  { id: 'pipe-t703-p711', points: [[-9, 0.6, -5], [-3, 0.8, 2]], color: '#ea580c', medium: '10 wt% LP Bottom (120°C)', subsystem: 'lowpolymer' },
  { id: 'pipe-p711-e711', points: [[-3, 1.4, 2], [1, 1.4, 2]], color: '#f97316', medium: 'Pressurized LP (22 kg/cm²G)', subsystem: 'lowpolymer' },
  { id: 'pipe-e711-d711', points: [[3.2, 1.4, 2], [6, 5.2, 2]], color: '#ef4444', medium: 'Heated LP (220°C -> Flash 3 kg/cm²G)', subsystem: 'lowpolymer' },
  { id: 'pipe-d711-vapor', points: [[6, 7.2, 2], [6, 10.5, -5], [-9, 10.5, -5]], color: '#34d399', medium: 'Flashed Hexane Vapor Recycle to T-703', subsystem: 'lowpolymer' },
  { id: 'pipe-d711-e712', points: [[6, 0.6, 2], [10, 1.2, 5]], color: '#f97316', medium: 'Molten LP (160°C)', subsystem: 'lowpolymer' },
  { id: 'pipe-e712-d712', points: [[12.1, 1.2, 5], [15, 5.5, 5]], color: '#ea580c', medium: 'Heated LP (180°C)', subsystem: 'lowpolymer' },
  { id: 'pipe-d712-c701', points: [[15, 7.6, 5], [15, 2.0, 10]], color: '#a7f3d0', medium: 'Vacuum Hexane Vapor (-0.39 kg/cm²G)', subsystem: 'lowpolymer' },
  { id: 'pipe-d712-d717', points: [[15, 0.6, 5], [12.5, 0.8, 9], [10, 5.2, 13]], color: '#fb923c', medium: 'Stripped Molten LP (P-713A/B)', subsystem: 'lowpolymer' },
  { id: 'pipe-d717-m761', points: [[10, 0.6, 13], [13, 2.8, 16]], color: '#fdba74', medium: 'Molten LP Feed to Flaker (P-717A/B)', subsystem: 'lowpolymer' },

  // Purification & Distribution
  { id: 'pipe-e704-d702', points: [[-1.5, 1.2, -14], [2, 2.4, -14]], color: '#10b981', medium: 'Condensed Hexane (U-Seal)', subsystem: 'purification' },
  { id: 'pipe-d702-p706', points: [[4.5, 1.4, -14], [6, 1.0, -14]], color: '#34d399', medium: 'Water-saturated Hexane (~250 ppm)', subsystem: 'purification' },
  { id: 'pipe-p706-t704', points: [[6, 1.4, -14], [8.5, 12.5, -14], [11, 12.5, -14]], color: '#10b981', medium: 'Dehydrator Top Feed (LV-731)', subsystem: 'purification' },
  { id: 'pipe-t704-ovh', points: [[11, 14.5, -14], [11, 16.2, -14], [-4, 16.2, -14], [-4, 2.5, -14]], color: '#6ee7b7', medium: 'Dehydrator Overhead Vapor to E-704', subsystem: 'purification' },
  { id: 'pipe-t704-tk702', points: [[11, 0.6, -14], [15.5, 0.8, -14], [20, 6.2, -14]], color: '#22c55e', medium: 'Dried Pure Hexane (≤10 ppm, 40-43°C)', subsystem: 'distribution' },
  { id: 'pipe-tk702-p708', points: [[22.7, 0.8, -14], [26, 0.8, -14]], color: '#16a34a', medium: 'Pure Hexane Suction', subsystem: 'distribution' },
  { id: 'pipe-p708-d703', points: [[26, 1.5, -14], [31, 5.8, -14]], color: '#4ade80', medium: 'HP Hexane (≥12 kg/cm²G)', subsystem: 'distribution' },
  { id: 'pipe-d703-out', points: [[31, 0.6, -14], [37, 0.6, -14]], color: '#86efac', medium: 'Ultra-dry Pure Hexane (<5 wt ppm) to Rx', subsystem: 'distribution' },

  // Slop Hexane
  { id: 'pipe-d751-d753', points: [[-28.1, 1.2, -14], [-24, 4.8, -14]], color: '#eab308', medium: 'Slop Hexane (N2 Pressurized)', subsystem: 'slop' },
  { id: 'pipe-d753-tk703', points: [[-24, 5.8, -14], [-21, 6.5, -14], [-18, 6.2, -14]], color: '#facc15', medium: 'Recovered Hexane (40°C) to TK-703/D-701', subsystem: 'slop' },

  // Oligomer Cut
  { id: 'pipe-d718-t761', points: [[23.1, 1.2, 6], [26, 7.5, 4]], color: '#a855f7', medium: 'Oligomer-rich Hexane Feed', subsystem: 'oligomer' },
  { id: 'pipe-t761-d762', points: [[26, 15.0, 4], [31, 2.4, 4]], color: '#d8b4fe', medium: 'Overhead Hexane + Butene-1 (1.5 kg/cm²G)', subsystem: 'oligomer' },
  { id: 'pipe-t761-osbl', points: [[26, 0.6, 4], [36, 0.6, 4]], color: '#7e22ce', medium: 'Cooled Oligomer (≤40°C) to OSBL', subsystem: 'oligomer' },

  // pH Treatment
  { id: 'pipe-d721-d782', points: [[-26, 0.5, 12], [-26, 0.5, 17], [-14, 4.2, 20]], color: '#ec4899', medium: 'Alkaline Wastewater (pH > 12 via LV-701)', subsystem: 'phtreatment' },
  { id: 'pipe-d781-d782', points: [[-20, 0.8, 20], [-14, 3.8, 20]], color: '#f43f5e', medium: '18% HCl Dosing (P-782A/B)', subsystem: 'phtreatment' },
  { id: 'pipe-d782-d783', points: [[-14, 1.2, 20], [-8, 3.8, 20]], color: '#f472b6', medium: 'Stage-1 Neutralized WW (pH ~ 10)', subsystem: 'phtreatment' },
  { id: 'pipe-d783-cwwt', points: [[-8, 0.8, 20], [-2, 0.8, 20]], color: '#38bdf8', medium: 'Treated Wastewater (pH 6–8) to PIT-780 / CWWT', subsystem: 'phtreatment' }
];

export const DEVIATION_SCENARIOS = [
  {
    id: 'normal',
    title: 'Vận hành bình thường (Normal Operation)',
    severity: 'normal',
    affectedIds: [],
    tag: 'SYSTEM NORMAL',
    cause: 'Toàn bộ thông số vận hành nằm trong giới hạn kiểm soát an toàn (SOL).',
    consequence: 'Hexane tinh khiết đạt độ ẩm < 5 wt ppm; Low polymer tạo vảy ổn định; Nước thải đạt pH 6–8.',
    prevent: 'Tuân thủ bảo trì định kỳ (PM) và kiểm tra hiện trường theo SOP.',
    actions: [
      'Field Operator (FO): Tuần tra kiểm tra mức kính thủy (LG), áp kế tại chỗ (PG), độ rung/nhiệt độ ổ trục bơm.',
      'Boardman (BM): Giám sát xu hướng (trend) các vòng điều khiển LIC, PIC, TIC, AIC trên DCS.'
    ]
  },
  {
    id: 'pic721_high',
    title: 'PIC-721: Áp suất cao tháp chưng cất T-703 (> 4.0 kg/cm²G)',
    severity: 'critical',
    affectedIds: ['T-703', 'E-703A/B'],
    tag: 'PIC-721 HIGH ALARM',
    cause: 'Đóng nhầm van điều áp đỉnh PV-721 trên đường hơi đỉnh T-703 hoặc cấp hơi MS quá mức cho E-703A/B.',
    consequence: 'Quá áp tháp T-703 (HH PZI-729 tại 4.5 kg/cm²G), nguy cơ mất kiểm soát (LOC), cháy nổ và hư hỏng thiết bị.',
    prevent: 'Bảo trì định kỳ van điều khiển PV-721 và FV-721.',
    actions: [
      '1. Kiểm tra độ mở thực tế của van PV-721 tại hiện trường.',
      '2. Nếu vị trí van hiển thị đúng nhưng áp vẫn cao: Field Operator thao tác điều khiển van bypass thủ công để xả áp.',
      '3. Nếu vị trí van sai: Hiệu chỉnh lại bộ định vị van điều khiển PV-721.',
      '4. Boardman giảm lượng hơi trung áp (MS) cấp vào Reboiler E-703A/B thông qua van FV-721.'
    ]
  },
  {
    id: 'fzi732_low',
    title: 'FZI-732: Mất nước làm mát CWR tại E-704 (< 475 t/h)',
    severity: 'critical',
    affectedIds: ['E-704', 'D-702', 'T-703'],
    tag: 'FZA-732 LL TRIP RISK',
    cause: 'Mất nguồn cung cấp nước làm mát (CWS) tới bộ ngưng tụ đỉnh E-704.',
    consequence: 'Mất khả năng ngưng tụ hơi từ T-703 và T-704, gây quá áp hệ thống D-702 (áp suất thiết kế 3.8 barg), nguy cơ LOC và cháy nổ.',
    prevent: 'Bảo trì phòng ngừa hệ thống nước làm mát CWS.',
    actions: [
      '1. Kiểm tra trạng thái hệ thống nước làm mát CWS và áp suất tại PG-7307.',
      '2. Khởi động lại bơm nước làm mát (CW pump) nếu bị trip.',
      '3. Field Operator kiểm tra và mở hoàn toàn các van tay cô lập đường CWS/CWR cho E-704.'
    ]
  },
  {
    id: 'lic722_high',
    title: 'LIC-722: Mức cao 1st Flash Drum D-711 (> 3450 mm)',
    severity: 'warning',
    affectedIds: ['D-711', 'E-712'],
    tag: 'LIC-722 HIGH LEVEL',
    cause: 'Lỗi bộ điều khiển LIC-722 làm đóng van đáy LV-722 hoặc tắc nghẽn đường ống sang E-712 do mất hơi gia nhiệt.',
    consequence: 'Dâng mức trong D-711 cuốn theo Low Polymer nóng chảy ngược lên đỉnh về T-703, gây nghẽn đường hơi và quá áp D-711.',
    prevent: 'Bảo trì định kỳ cho LV-722 và kiểm tra bẫy hơi hệ thống gia nhiệt.',
    actions: [
      '1. Kiểm tra áp suất D-711 qua PZI-722, PG-7207 và mức thực tế trên kính thủy.',
      '2. Kiểm tra vị trí van LV-722; nếu van kẹt đóng, FO điều tiết dòng sang D-712 bằng van cô lập tay phía sau LV-722.',
      '3. Line-up và khởi động bơm chuyển P-712 nếu cần thiết để hạ nhanh mức D-711.'
    ]
  },
  {
    id: 'pic724_high',
    title: 'PIC-724: Mất chân không D-712 / Trip bơm C-701 (> -0.2 kg/cm²G)',
    severity: 'critical',
    affectedIds: ['D-712', 'C-701', 'M-761A/B'],
    tag: 'C-701 VACUUM LOSS',
    cause: 'Bơm chân không C-701 ngừng sự cố (trip) hoặc van SDV-721 đóng.',
    consequence: 'Mất chân không khiến Hexane không bay hơi hết trong D-712, cuốn theo Low Polymer xuống cụm Flaker M-761A/B gây nguy cơ cháy nổ nghiêm trọng.',
    prevent: 'Bảo trì định kỳ C-701 và giám sát nhiệt độ nước làm mát TZA-721 (< 45°C).',
    actions: [
      '1. Kiểm tra trạng thái chạy của bơm chân không C-701 và áp kế PG-7211.',
      '2. Kiểm tra trạng thái mở của van ngắt khẩn cấp SDV-721.',
      '3. Khởi động lại C-701 ngay lập tức nếu điều kiện liên động cho phép.'
    ]
  },
  {
    id: 'ai205_high',
    title: 'AI-205-2: Hàm lượng nước cao đầu ra T-704 (> 15 ppm)',
    severity: 'warning',
    affectedIds: ['T-704', 'TK-702', 'D-703A/B'],
    tag: 'AI-205-2 HIGH MOISTURE',
    cause: 'Lỗi FIC-734 làm đóng van hơi LS FV-734 vào Reboiler E-705 hoặc ngập nước ngưng trong D-785 (đóng nhầm LV-726).',
    consequence: 'Thiếu nhiệt tách nước tại T-704, đẩy Hexane nhiễm ẩm sang bồn TK-702 làm quá tải bình sấy sàng phân tử D-703A/B và nguy cơ ngộ độc xúc tác.',
    prevent: 'Bảo trì định kỳ FV-734 và LV-726.',
    actions: [
      '1. Kiểm tra vị trí mở của van FV-734 (đường hơi LS vào E-705) và mức kính thủy LG-7726 trên D-785.',
      '2. Nếu vị trí FV-734 đúng mà vẫn thiếu nhiệt: FO đóng van cô lập và mở điều tiết van bypass bằng tay.',
      '3. Kiểm tra phân bố nhiệt độ dọc tháp T-704.'
    ]
  },
  {
    id: 'li701_low',
    title: 'LI-701: Mức nước thấp trong D-721 (< 1420 mm) - Nguy cơ lọt Hexane',
    severity: 'critical',
    affectedIds: ['D-721', 'D-782', 'D-783'],
    tag: 'HEXANE CARRY-OVER RISK',
    cause: 'Mở nhầm van xả nước thải LV-701 trên đáy D-721.',
    consequence: 'Cạn lớp đệm nước tại D-721 làm Hexane chảy thẳng sang cụm xử lý pH (D-782) và hố PIT-780 (báo động khí cháy AZIG-72), nguy cơ cháy nổ cao.',
    prevent: 'Bảo trì định kỳ LV-701 và giám sát song song LI-701-1 / LI-701-2.',
    actions: [
      '1. Đối chiếu tín hiệu hai bộ đo mức giao diện LI-701-1 và LI-701-2.',
      '2. Kiểm tra độ mở van LV-701; FO khép bớt van tay cô lập để giảm ngay lưu lượng nước thải và giữ lớp đệm nước trong D-721.',
      '3. Nếu phát hiện khí cháy tại PIT-780 (AZIG-72), cô lập ngay tuyến xả từ D-721/D-722.'
    ]
  },
  {
    id: 'ai781_fault',
    title: 'AI-781 / AI-782: Sai lệch pH cụm xử lý nước thải D-782 / D-783',
    severity: 'warning',
    affectedIds: ['D-781', 'D-782', 'D-783'],
    tag: 'pH OFF-SPEC ALARM',
    cause: 'Trip bơm định lượng axit P-782A/B, P-784A/B, cạn mức axit D-781 (LI-785) hoặc lỗi đầu đo AIC-781/782.',
    consequence: 'Nước thải xả sang CWWT có pH ngoài dải 6–8, gây sốc vi sinh cho hệ thống xử lý nước thải sinh học.',
    prevent: 'Kiểm tra mức axit trên kính thủy LG-7805 và hiệu chuẩn đầu đo pH định kỳ.',
    actions: [
      '1. Kiểm tra mức axit HCl 18% trong bồn D-781 (LG-7805) và bổ sung nếu thấp.',
      '2. Kiểm tra trạng thái chạy của bơm P-782A/B và P-784A/B.',
      '3. Boardman chuyển AIC-781 và AIC-782 sang chế độ Manual (MAN), điều chỉnh tốc độ/servomotor bơm axit để đưa pH D-783 về 6–8.'
    ]
  }
];
