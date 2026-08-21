export interface Certification {
  id: string
  title: string
  apparatus: string
  category: 'camera' | 'lighting' | 'audio' | 'grip' | 'studios'
  categoryLabel: string
  issuingBody: string
  verificationAuthority: string
  previewImage: string
  pdfDoc: string
  technicalSummary: string
  keyCompetencies: string[]
}

export const certificationCategories = [
  { id: 'all', label: 'All Certifications' },
  { id: 'camera', label: 'Cameras & Optics' },
  { id: 'lighting', label: 'Lighting & Gaffer' },
  { id: 'audio', label: 'Sound & Recording' },
  { id: 'grip', label: 'Grip & Monitoring' },
  { id: 'studios', label: 'Studios & Safety' },
] as const

export const certifications: Certification[] = [
  // ================= CAMERA & OPTICS =================
  {
    id: 'arri_alexa_mini',
    title: 'ARRI Alexa Mini Cinema Camera',
    apparatus: 'ARRI Alexa Mini (Super 35mm)',
    category: 'camera',
    categoryLabel: 'Cinema Cameras',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/arri_alexa_mini_camera_training.png',
    pdfDoc: '/certificates/docs/arri_alexa_mini_camera_training.pdf',
    technicalSummary: 'Certified operational competence on the ARRI Alexa Mini cinema camera system, including Log-C sensor calibration, frame rate configurations, and cinema rigging.',
    keyCompetencies: ['ARRIRAW & ProRes Codecs', 'Log-C Exposure Indexing', 'Internal ND Filters', 'Cinema PL Rigging']
  },
  {
    id: 'blackmagic_ursa_mini_g2',
    title: 'Blackmagic URSA Mini Pro 4.6K G2',
    apparatus: 'URSA Mini Pro 4.6K G2 Cinema System',
    category: 'camera',
    categoryLabel: 'Cinema Cameras',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/blackmagic_ursa_mini_g2_4_6k_film_camera.png',
    pdfDoc: '/certificates/docs/blackmagic_ursa_mini_g2_4_6k_film_camera.pdf',
    technicalSummary: 'Certified operation for high-frame-rate 4.6K Super 35 acquisition, Blackmagic RAW color science, and dynamic studio configurations.',
    keyCompetencies: ['4.6K BRAW 12-bit', 'High Frame Rate (300fps)', 'Dual Native ISO', 'Interchangeable Mounts']
  },
  {
    id: 'canon_eos_c70_cine',
    title: 'Canon Cinema EOS C70 Cine Kit',
    apparatus: 'Canon EOS C70 RF-Mount Cinema Camera',
    category: 'camera',
    categoryLabel: 'Cinema Cameras',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/canon_eos_c70_cine.png',
    pdfDoc: '/certificates/docs/canon_eos_c70_cine.pdf',
    technicalSummary: 'Authorized production training on the Canon C70 4K DGO sensor, C-Log2/C-Log3 gamuts, and high-speed documentary rigging.',
    keyCompetencies: ['Dual Gain Output (DGO)', 'Canon Log 2 & Log 3', '4K 120p All-I Recording', 'RF Cinema Architecture']
  },
  {
    id: 'canon_c300_mk1',
    title: 'Canon EOS C300 Mk1 Documentary System',
    apparatus: 'Canon Cinema EOS C300',
    category: 'camera',
    categoryLabel: 'Cinema Cameras',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/canon_c300_mk1_doc_kit.png',
    pdfDoc: '/certificates/docs/canon_c300_mk1_doc_kit.pdf',
    technicalSummary: 'Certified documentary field kit operation, broadcast MXF workflows, and handheld ergonomic configuration.',
    keyCompetencies: ['Broadcast 50Mbps MXF', 'Canon Log Gamma', 'HD-SDI Monitoring', 'Field Audio Interface']
  },
  {
    id: 'pl_mount_film_lenses',
    title: 'PL Mount Film Lens Set',
    apparatus: 'Professional Cinema PL Prime & Zoom Lenses',
    category: 'camera',
    categoryLabel: 'Optics & Glass',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/pl_mount_film_lens_set_training.png',
    pdfDoc: '/certificates/docs/pl_mount_film_lens_set_training.pdf',
    technicalSummary: 'Authorized optical calibration, flange focal depth alignment, matte box installation, and follow-focus gearing on cinema primes.',
    keyCompetencies: ['Flange Depth Calibration', 'Follow Focus & Wireless FIZ', 'Cinema Matte Boxes', 'Optical Aberration Control']
  },
  {
    id: 'ef_mount_lenses',
    title: 'EF Mount Cinema & Stills Lens System',
    apparatus: 'Canon L-Series & Cinema EF Primes',
    category: 'camera',
    categoryLabel: 'Optics & Glass',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/ef_mount_lens_training.png',
    pdfDoc: '/certificates/docs/ef_mount_lens_training.pdf',
    technicalSummary: 'Certified handling, electronic aperture linkage, and optical performance calibration across Canon L-Series prime and telephoto optics.',
    keyCompetencies: ['Electronic Iris Control', 'Speed Booster Optimization', 'Aspherical Glass Handling', 'Telephoto Stabilization']
  },
  {
    id: 'wireless_camera_accessories',
    title: 'Wireless Camera Transmission & Accessories',
    apparatus: 'Teradek Wireless Video & Remote Focus Systems',
    category: 'camera',
    categoryLabel: 'Camera Systems',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/wireless_camera_accessories.png',
    pdfDoc: '/certificates/docs/wireless_camera_accessories.pdf',
    technicalSummary: 'Certified low-latency zero-delay wireless video transmitter setup, director video village distribution, and remote focus links.',
    keyCompetencies: ['Zero-Delay HD Wireless', 'Director Village Rigging', 'Remote Follow Focus Links', 'Multi-receiver Spectrum Pairing']
  },

  // ================= LIGHTING & GAFFER =================
  {
    id: 'litepanels_gemini_1x1',
    title: 'Litepanels Gemini 1x1 Hard RGBWW LED',
    apparatus: 'Litepanels Gemini 1x1 Hard RGBWW Panel',
    category: 'lighting',
    categoryLabel: 'Lighting Architecture',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/litepanels_gemini_1x1_hard_rgbww_led_panel_training.png',
    pdfDoc: '/certificates/docs/litepanels_gemini_1x1_hard_rgbww_led_panel_training.pdf',
    technicalSummary: 'Certified operation of high-output RGBWW punch panels, CCT color temperature tuning (2700K–10000K), and wireless CRMX/DMX control.',
    keyCompetencies: ['RGBWW Color Gamut (Full Spectrum)', 'CCT & HSI Modes', 'Built-in Gels & Special FX', 'Wireless DMX / CRMX Protocol']
  },
  {
    id: 'litepanels_gemini_2x1',
    title: 'Litepanels Gemini 2x1 LED Soft Panel',
    apparatus: 'Litepanels Gemini 2x1 Cinematic Soft Light',
    category: 'lighting',
    categoryLabel: 'Lighting Architecture',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/litepanels_gemini_2x1_led_soft_panel.png',
    pdfDoc: '/certificates/docs/litepanels_gemini_2x1_led_soft_panel.pdf',
    technicalSummary: 'Certified operation for high-fidelity soft key lighting, skin tone reproduction, diffuser grids, and flicker-free high-speed sync.',
    keyCompetencies: ['Soft Natural Skin Diffusion', 'High CRI/TLCI 97+', 'Master/Replica Lighting Links', 'Battery & AC Power Rigging']
  },
  {
    id: 'litepanels_studio_x4',
    title: 'Litepanels Studio X4 Bi-Color Fresnels',
    apparatus: 'Litepanels Studio X4 LED Bi-Color Fresnel Series',
    category: 'lighting',
    categoryLabel: 'Lighting Architecture',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/litepanels_studio_x4_bi_color_lights.png',
    pdfDoc: '/certificates/docs/litepanels_studio_x4_bi_color_lights.pdf',
    technicalSummary: 'Certified studio gaffer operation on true optical glass Fresnels, beam angle spotting/flooding, and barn-door light shaping.',
    keyCompetencies: ['Optical Glass Fresnel Beam', 'Barn Door Light Shaping', 'Bi-Color 2700K–6000K', 'Precision Studio Grid Rigging']
  },
  {
    id: 'dmg_dash_pocket_quad',
    title: 'DMG Lumière DASH Pocket & Quad LED CRMX',
    apparatus: 'DMG DASH CRMX Multi-Light Studio System',
    category: 'lighting',
    categoryLabel: 'Lighting Architecture',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/dmg_dash_pocket_quad_led_crmx_kits.png',
    pdfDoc: '/certificates/docs/dmg_dash_pocket_quad_led_crmx_kits.pdf',
    technicalSummary: 'Certified operation on MIX technology 6-chip LEDs, quad-panel array linking, dot-light diffusion, and wireless app gaffing.',
    keyCompetencies: ['Rosco MIX 6-Chip Color Engine', 'Wireless CRMX & Bluetooth App', 'Quad-Mount Array Configuration', 'True Rosco Gel Emulation']
  },
  {
    id: 'kino_flo_systems',
    title: 'Kino Flo Studio Lighting Systems',
    apparatus: 'Kino Flo 4Bank & Dimmable Fixtures',
    category: 'lighting',
    categoryLabel: 'Lighting Architecture',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/kino_flo.png',
    pdfDoc: '/certificates/docs/kino_flo.pdf',
    technicalSummary: 'Certified studio lighting setup, ballast regulation, color temperature tube calibration, and soft wrapping portrait lighting.',
    keyCompetencies: ['True Match Lamp Color Tubes', 'Individual Lamp Switching', 'High-Output Ballast Control', 'Lollipop Mount Balancing']
  },
  {
    id: 'nanlite_forza_60b',
    title: 'Nanlite Forza 60B Bi-Color (3-Light Kit)',
    apparatus: 'Nanlite Forza 60B Compact Bi-Color COB Kit',
    category: 'lighting',
    categoryLabel: 'Lighting Architecture',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/nanlite_forza_60b_led_x3.png',
    pdfDoc: '/certificates/docs/nanlite_forza_60b_led_x3.pdf',
    technicalSummary: 'Certified operation of 3-point portable LED setups, Bowens mount modifiers, parabolic softboxes, and battery-powered run-and-gun lighting.',
    keyCompetencies: ['3-Point Key/Fill/Hair Lighting', 'Bi-Color 2700K–6500K COB', 'Parabolic Softbox Modifiers', 'Dual NPF Battery Rigging']
  },
  {
    id: 'cineo_maverick',
    title: 'Cineo Maverick Cinema High-Output LED',
    apparatus: 'Cineo Maverick Remote Phosphor LED',
    category: 'lighting',
    categoryLabel: 'Lighting Architecture',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/cineo_maverick.png',
    pdfDoc: '/certificates/docs/cineo_maverick.pdf',
    technicalSummary: 'Certified operational competence in remote phosphor illumination, delivering ultra-stable color rendering and high-lumen output.',
    keyCompetencies: ['Remote Phosphor Technology', 'Constant Color Temperature', 'Heavy-Duty Location Gaffing', 'Flicker-free Phantom Sync']
  },

  // ================= AUDIO & FIELD SOUND =================
  {
    id: 'sound_devices_633',
    title: 'Sound Devices 633 Production Mixer & Recorder',
    apparatus: 'Sound Devices 633 6-Input / 10-Track Field Recorder',
    category: 'audio',
    categoryLabel: 'Production Sound',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/sound_devices_633.png',
    pdfDoc: '/certificates/docs/sound_devices_633.pdf',
    technicalSummary: 'Certified master operational competence on Sound Devices flagship field recorder, including 10-track polyphonic WAV recording, ultra-low-noise preamps, and SMPTE timecode sync.',
    keyCompetencies: ['10-Track Polyphonic 24-bit WAV', 'Ambient Timecode Generator & Jam Sync', 'PowerSafe & QuickBoot Power Isolation', 'Analog Limiter & High-Pass Filtering']
  },
  {
    id: 'sennheiser_ew100',
    title: 'Sennheiser ew100 G4 Wireless Radio Mic System',
    apparatus: 'Sennheiser EW 100 G4 UHF Wireless Lavalier Kits',
    category: 'audio',
    categoryLabel: 'Production Sound',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/sennheiser_ew100_radio_microphone.png',
    pdfDoc: '/certificates/docs/sennheiser_ew100_radio_microphone.pdf',
    technicalSummary: 'Certified multi-channel UHF frequency bank scanning, RF interference management, transmitter sensitivity calibration, and bodypack mic placement.',
    keyCompetencies: ['UHF RF Frequency Coordination', 'Microphone Sensitivity & Gain Staging', 'Hidden Costume Mic Rigging', 'True Diversity Receiver Monitoring']
  },
  {
    id: 'boom_poles_microphones',
    title: 'Boom Poles & Directional Shotgun Microphones',
    apparatus: 'Carbon Fiber Boom Poles & Sennheiser MKH Shotguns',
    category: 'audio',
    categoryLabel: 'Production Sound',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/boom_poles.png',
    pdfDoc: '/certificates/docs/boom_poles.pdf',
    technicalSummary: 'Certified boom pole cueing, shock-mount damping, blimp wind-protection rigging, and acoustic axis tracking for dialogue.',
    keyCompetencies: ['Acoustic Axis Tracking', 'Rycote Blimp & Deadcat Rigging', 'Carbon Fiber Extension & Weight Balance', 'Phase & Room Resonance Rejection']
  },

  // ================= GRIP & MONITORING =================
  {
    id: 'shark_slider',
    title: 'Shark Carbon Fiber Cinema Slider System',
    apparatus: 'iFootage Shark Slider S1 Pro System',
    category: 'grip',
    categoryLabel: 'Grip & Movement',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/shark_slider.png',
    pdfDoc: '/certificates/docs/shark_slider.pdf',
    technicalSummary: 'Certified track extension installation, flywheel inertia balance, seamless parallax tracking, and heavy cinema payload calibration.',
    keyCompetencies: ['Flywheel Inertia Damping', 'Parallax Tracking Belts', 'Multi-angle Tripod Leveling', 'Smooth Cinematic Push-Ins']
  },
  {
    id: 'miller_tripod',
    title: 'Miller Professional Fluid Head Tripod Systems',
    apparatus: 'Miller Compass Fluid Head & Carbon Fiber Legs',
    category: 'grip',
    categoryLabel: 'Grip & Movement',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/miller_tripod_training.png',
    pdfDoc: '/certificates/docs/miller_tripod_training.pdf',
    technicalSummary: 'Certified counterbalance selection, pan/tilt fluid drag calibration, spreader stabilization, and heavy camera safety locking.',
    keyCompetencies: ['Multi-tier Counterbalance Drag', 'True Fluid Pan/Tilt Damping', 'Ground & Mid-Level Spreaders', 'Precision Bubble Level Calibration']
  },
  {
    id: 'film_monitor',
    title: 'Professional Production Film Monitors & LUTs',
    apparatus: 'SmallHD & Atomos High-Bright Production Monitors',
    category: 'grip',
    categoryLabel: 'Monitoring & Calibration',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/film_monitor_training.png',
    pdfDoc: '/certificates/docs/film_monitor_training.pdf',
    technicalSummary: 'Certified false color exposure calibration, 3D LUT loading, waveform/vectorscope analysis, and daylight viewable monitor rigging.',
    keyCompetencies: ['False Color Exposure Mapping', 'Custom 3D LUT Profiles', 'Waveform & Vectorscope Calibration', 'SDI Loop-out Video Village Routing']
  },

  // ================= STUDIOS & SAFETY =================
  {
    id: 'b32_moving_image_studio',
    title: 'B32 Moving Image Soundstage Studio Induction',
    apparatus: 'UCA B32 Soundstage, Overhead Grid & Infinity Cyc',
    category: 'studios',
    categoryLabel: 'Soundstages & Facilities',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/b32_moving_image_studio_induction.png',
    pdfDoc: '/certificates/docs/b32_moving_image_studio_induction.pdf',
    technicalSummary: 'Certified soundstage operational induction: overhead lighting grid power distribution, green screen infinity cyc lighting, and set acoustic isolation.',
    keyCompetencies: ['Overhead Grid Rigging & Safety Chains', 'Chroma Green Cyc Balancing', 'High-Amperage Power Distribution', 'Soundstage Health & Evacuation Protocols']
  },
  {
    id: 'g12_moving_image_studio',
    title: 'G12 Moving Image Studio (KN Singh Studio)',
    apparatus: 'K.N. Singh Moving Image Soundstage & Control Suite',
    category: 'studios',
    categoryLabel: 'Soundstages & Facilities',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/g12_moving_image_studio_kn_singh_studio_induction.png',
    pdfDoc: '/certificates/docs/g12_moving_image_studio_kn_singh_studio_induction.pdf',
    technicalSummary: 'Authorized soundstage access and management for complex theatrical set builds, multicam setups, and spatial acoustic containment.',
    keyCompetencies: ['Theatrical Set Construction Protocol', 'Studio Multicam Routing', 'Acoustic Wall Treatment Management', 'DMX Studio Lighting Console Control']
  },
  {
    id: 'ra_approved_safety',
    title: 'Set Safety, Risk Assessment & Protocol (RA Approved)',
    apparatus: 'Production Health, Safety & Compliance Protocol',
    category: 'studios',
    categoryLabel: 'Safety & Compliance',
    issuingBody: 'University for the Creative Arts (UCA London)',
    verificationAuthority: 'SISO Technical Authorization',
    previewImage: '/certificates/previews/ra_approved.png',
    pdfDoc: '/certificates/docs/ra_approved.pdf',
    technicalSummary: 'Formal accreditation in film production Risk Assessment (RA Approved), hazards mitigation, electrical safety, stunt coordination, and set compliance.',
    keyCompetencies: ['Formal Production Risk Assessment (RA)', 'Electrical Safety & Cable Management', 'Emergency First Response Protocol', 'Set Insurance & Public Liability Compliance']
  }
]
