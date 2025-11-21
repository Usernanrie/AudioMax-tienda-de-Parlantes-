// ===============================
//  BASE DE DATOS DE PRODUCTOS
// ===============================

const productos = {
  // ================= ACCESORIOS =================
  accesorio1: {
    id: "accesorio1",
    nombre: "Power Bank 10000mAh",
    precio: 85,
    descripcion: "Banco de carga portátil de alto rendimiento.",
    imagen: "../imagenes/productos/accesorios/powerbank.jpg",
    datasheet: ["Capacidad 10000 mAh","USB dual","Carga rápida","Protección anti-sobrecarga"]
  },
  accesorio2: {
    id: "accesorio2",
    nombre: "Cable AUX 1.5m",
    precio: 12,
    descripcion: "Cable auxiliar reforzado, compatible con todo dispositivo.",
    imagen: "../imagenes/productos/accesorios/cable-aux.jpg",
    datasheet: ["Conectores 3.5 mm","Longitud: 1.5 m","Refuerzo anti-doblez","Cobre libre de oxígeno"]
  },
  accesorio3: {
    id: "accesorio3",
    nombre: "Cable USB-C Carga Rápida",
    precio: 18,
    descripcion: "Cable de alta resistencia para carga rápida.",
    imagen: "../imagenes/productos/accesorios/cable-usb-c.jpg",
    datasheet: ["Carga: 3A","Compatibilidad universal","Longitud: 1 m","Material trenzado"]
  },
  accesorio4: {
    id: "accesorio4",
    nombre: "Soporte para micrófono",
    precio: 55,
    descripcion: "Brazo articulado liviano con ajuste universal.",
    imagen: "../imagenes/productos/accesorios/soporte-micro.jpg",
    datasheet: ["Incluye adaptador","Aluminio reforzado","Rotación 360°","Abrazadera resistente"]
  },
  accesorio5: {
    id: "accesorio5",
    nombre: "Tira LED RGB 5m",
    precio: 35,
    descripcion: "Iluminación decorativa con control remoto.",
    imagen: "../imagenes/productos/accesorios/rgb-led.jpg",
    datasheet: ["Longitud: 5 m","RGB multicolor","Control remoto","Adhesivo resistente"]
  },

  // ================= AUDÍFONOS =================
  audifono1: {
    id: "audifono1",
    nombre: "Sony WH-1000XM4",
    precio: 2390,
    descripcion: "Audífonos con cancelación de ruido premium.",
    imagen: "../imagenes/productos/audifonos/sony-wh1000xm4.jpg",
    datasheet: ["Cancelación de ruido HD","Autonomía: 30 h","Bluetooth 5.0","Compatibilidad LDAC"]
  },
  audifono2: {
    id: "audifono2",
    nombre: "Redmi Buds 5 Pro",
    precio: 280,
    descripcion: "True wireless, buena autonomía y perfil equilibrado.",
    imagen: "../imagenes/productos/audifonos/buds5pro.jpg",
    datasheet: ["True Wireless","Bluetooth 5.2","Autonomía: 28 h","Carga rápida"]
  },
  audifono3: {
    id: "audifono3",
    nombre: "JBL Tune 750BTNC",
    precio: 690,
    descripcion: "Graves potentes y cancelación activa de ruido.",
    imagen: "../imagenes/productos/audifonos/jbl-750btnc.jpg",
    datasheet: ["ANC activo","Autonomía: 15 h","Driver 40 mm","Bluetooth 5.0"]
  },
  audifono4: {
    id: "audifono4",
    nombre: "AirPods Pro 2",
    precio: 1850,
    descripcion: "Cancelación avanzada y modo ambiente mejorado.",
    imagen: "../imagenes/productos/audifonos/airpods-pro.jpg",
    datasheet: ["ANC adaptativo","Audio espacial","Autonomía total: 30 h","Chip H2"]
  },
  audifono5: {
    id: "audifono5",
    nombre: "Logitech G435",
    precio: 420,
    descripcion: "Audífonos gamer inalámbricos ultra livianos.",
    imagen: "../imagenes/productos/audifonos/logitech-g435.jpg",
    datasheet: ["Lightspeed Wireless","Bluetooth multipunto","Peso: 165g","Autonomía: 18 h"]
  },
// ================= EQUIPOS DE SONIDO =================
equipo1: {
    id: "equipo1",
    nombre: "Sony MHC-V13",
    precio: 1250,
    descripcion: "Sistema compacto con graves potentes y entrada para micrófono.",
    imagen: "../imagenes/productos/sonido/sony-mhc-v13.jpg",
    datasheet: ["Graves potentes","Entrada para micrófono","Potencia: 100 W","Conectividad Bluetooth"]
},
equipo2: {
    id: "equipo2",
    nombre: "LG XBOOM ON7",
    precio: 1650,
    descripcion: "Alta potencia, karaoke y luces para ambiente festivo.",
    imagen: "../imagenes/productos/sonido/lg-xboom-on7.jpg",
    datasheet: ["Karaoke","Luces LED integradas","Potencia: 120 W","Bluetooth 5.0"]
},
equipo3: {
    id: "equipo3",
    nombre: "Panasonic Urban Audio",
    precio: 980,
    descripcion: "Sonido equilibrado para uso doméstico y reuniones.",
    imagen: "../imagenes/productos/sonido/panasonic-urban.jpg",
    datasheet: ["Sonido equilibrado","Compacto","Entrada auxiliar","Bluetooth"]
},
equipo4: {
    id: "equipo4",
    nombre: "JVC TH-M330",
    precio: 720,
    descripcion: "Versátil y con conectividad múltiple.",
    imagen: "../imagenes/productos/sonido/jvc-th-m330.jpg",
    datasheet: ["Conectividad múltiple","Potencia: 90 W","Entrada mic/line","Compacto y portátil"]
},
equipo5: {
    id: "equipo5",
    nombre: "Philips Party Speaker",
    precio: 890,
    descripcion: "Luces LED y potentes bajos — ideal para reuniones.",
    imagen: "../imagenes/productos/sonido/philips-party.jpg",
    datasheet: ["Bajos potentes","Luces LED","Potencia: 100 W","Entrada USB y Bluetooth"]},
  // ================= PARLANTES =================
  parlante1: {
    id: "parlante1",
    nombre: "JBL Charge 5",
    precio: 1090,
    descripcion: "Parlante portátil resistente al agua, batería de larga duración.",
    imagen: "../imagenes/productos/parlantes/jbl-charge5.jpg",
    datasheet: ["Potencia: 40W","Batería: 20 h","IP67 resistente al agua","Bluetooth 5.1"]
  },
  parlante2: {
    id: "parlante2",
    nombre: "Sony XB23",
    precio: 870,
    descripcion: "Compacto, sonido potente con graves reforzados.",
    imagen: "../imagenes/productos/parlantes/sony-xb23.jpg",
    datasheet: ["Potencia: 20W","Autonomía: 12 h","IP67 resistente al agua","Extra Bass"]
  },
  parlante3: {
    id: "parlante3",
    nombre: "JBL Go 3",
    precio: 450,
    descripcion: "Pequeño, portátil y resistente al agua.",
    imagen: "../imagenes/productos/parlantes/jbl-go3.jpg",
    datasheet: ["Potencia: 5W","Batería: 5 h","IP67 resistente al agua","Bluetooth 5.1"]
  },
  parlante4: {
    id: "parlante4",
    nombre: "Sony SRS-XB33",
    precio: 1050,
    descripcion: "Batería larga duración y graves intensos.",
    imagen: "../imagenes/productos/parlantes/sony-srsxb33.jpg",
    datasheet: ["Potencia: 20W","Batería: 24 h","IP67 resistente al agua","Extra Bass"]
  },
  parlante5: {
    id: "parlante5",
    nombre: "LG PX5",
    precio: 920,
    descripcion: "Compacto, buena potencia y diseño moderno.",
    imagen: "../imagenes/productos/parlantes/lg-px5.jpg",
    datasheet: ["Potencia: 30W","Batería: 16 h","Bluetooth 5.0","Diseño moderno"]
  },

  // ================= TORRES =================
  torre1: {
    id: "torre1",
    nombre: "JBL PartyBox 110",
    precio: 2790,
    descripcion: "Torre de sonido con luces y graves potentes.",
    imagen: "../imagenes/productos/torres/jbl-partybox110.jpg",
    datasheet: ["Potencia 160W","IPX4","Entrada mic/guitarra","Batería 12 h"]
  },
  torre2: {
    id: "torre2",
    nombre: "LG XBoom RN5",
    precio: 2250,
    descripcion: "Modo DJ y potencia de graves intensos.",
    imagen: "../imagenes/productos/torres/lg-rn5.jpg",
    datasheet: ["Potencia 500W","Woofer 8\"","Bluetooth","Luces reactivas"]
  },
  torre3: {
    id: "torre3",
    nombre: "Kolke Thunder KP-110",
    precio: 680,
    descripcion: "Económica, potente y con micrófono incluido.",
    imagen: "../imagenes/productos/torres/kolke-kp110.jpg",
    datasheet: ["Potencia 80W","Bluetooth","USB/SD","Micrófono incluido"]
  },
  torre4: {
    id: "torre4",
    nombre: "KTS 1098",
    precio: 230,
    descripcion: "Ideal para uso casual con luces RGB.",
    imagen: "../imagenes/productos/torres/kts-1098.jpg",
    datasheet: ["Bluetooth 5.0","Luces RGB","Control remoto","Batería recargable"]
  },
  torre5: {
    id: "torre5",
    nombre: "Sony MHC-V13",
    precio: 1890,
    descripcion: "Sonido potente ideal para reuniones y eventos.",
    imagen: "../imagenes/productos/torres/sony-dh290.jpg",
    datasheet: ["Luces LED","Bass Boost","Bluetooth","Entrada USB"]
  },

  // ================= MICRÓFONOS =================
  microfono1: {
    id: "microfono1",
    nombre: "Blue Yeti",
    precio: 890,
    descripcion: "Micrófono profesional versátil para voz y streaming.",
    imagen: "../imagenes/productos/microfonos/blue-yeti.jpg",
    datasheet: ["4 patrones polares","USB Plug & Play","Control de ganancia","Monitorización sin latencia"]
  },
  microfono2: {
    id: "microfono2",
    nombre: "Fifine K690",
    precio: 440,
    descripcion: "Excelente relación calidad-precio para grabación.",
    imagen: "../imagenes/productos/microfonos/fifine-k690.jpg",
    datasheet: ["3 patrones","USB","Perilla de volumen","Brazo articulado compatible"]
  },
  microfono3: {
    id: "microfono3",
    nombre: "BM-800",
    precio: 120,
    descripcion: "Económico, ideal para empezar en grabación.",
    imagen: "../imagenes/productos/microfonos/bm800.jpg",
    datasheet: ["Condensador cardioide","Respuesta 20Hz-20kHz","Incluye shockmount","Requiere alimentación externa"]
  },
  microfono4: {
    id: "microfono4",
    nombre: "Maono AU-PM422",
    precio: 350,
    descripcion: "Micrófono USB completo con brazo incluido.",
    imagen: "../imagenes/productos/microfonos/maono-au-pm422.jpg",
    datasheet: ["Sampling 192kHz","Cardioide","Botón mute","Set completo"]
  },
  microfono5: {
    id: "microfono5",
    nombre: "Sennheiser E835",
    precio: 650,
    descripcion: "Micrófono dinámico para escenario y voz.",
    imagen: "../imagenes/productos/microfonos/sennheiser-e835.jpg",
    datasheet: ["Patrón cardioide","Alta presión sonora","Cuerpo metálico","Respuesta vocal clara"]
  }
};

window.productos = productos;
