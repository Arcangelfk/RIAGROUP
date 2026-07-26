/* ==========================================================================
   RIAGROUP SAS - Catálogo Especializado de Insumos Agrícolas & Nutrición
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. BASE DE DATOS DE PRODUCTOS AGRÍCOLAS (FERTILIZACIÓN & FITOPROTECCIÓN)
       -------------------------------------------------------------------------- */
    const PRODUCTS_DATA = [
        {
            id: 'prod-1',
            name: 'YaraLiva Nitrabor (Nitrato de Calcio + Boro)',
            category: 'Fertilizantes',
            brand: 'Yara',
            presentation: 'Saco de 50 kg',
            availablePresentations: ['Saco de 25 kg', 'Saco de 50 kg', 'Big Bag de 1.000 kg'],
            activeIngredient: 'Nitrógeno Nítrico 15.4% + Calcio CaO 25.6% + Boro 0.3%',
            badge: 'Más Vendido',
            tagType: 'mas-vendidos',
            recommendedCrops: ['Aguacate Hass', 'Café', 'Papa', 'Tomate', 'Flores', 'Frutales'],
            mainBenefit: 'Mejora el cuajado del fruto, previene la pudrición apical y fortalece la pared celular.',
            shortDesc: 'Fertilizante edáfico granulado de alta solubilidad que aporta nitrógeno de rápida disponibilidad, calcio soluble y boro.',
            fullDesc: 'YaraLiva Nitrabor es la fuente ideal de Nitrógeno nítrico de rápida asimilación combinado con Calcio soluble y Boro. Esta sinergia nutricional promueve raíces sanas, brotes fuertes y frutos con mayor vida en anaquel y resistencia al transporte.',
            techSpecs: {
                solubility: '100% Soluble en agua edáfica',
                density: '1.1 kg/L granulado libre de polvo',
                phRange: '5.5 - 6.5 en solución al 10%',
                actionType: 'Nutrición edáfica inmediata'
            },
            dosage: '200 - 400 kg/Ha según análisis de suelo y etapa fenológica del cultivo.',
            price: 185000,
            priceLabel: '$185.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/15-15-15.png?v=1765396379',
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/Nucleo_34_pastos.png?v=1765397696'
            ]
        },
        {
            id: 'prod-2',
            name: 'BioTrop Trichoderma Harzianum (Biofungicida)',
            category: 'Abonos',
            brand: 'BioTrop',
            presentation: 'Bolsa de 1 kg (Polvo Humectable)',
            availablePresentations: ['Bolsa de 500 g', 'Bolsa de 1 kg', 'Caja de 10 kg'],
            activeIngredient: 'Trichoderma harzianum cepa TH-02 (1x10^9 esporas/g)',
            badge: 'Producto Biológico',
            tagType: 'biologicos',
            recommendedCrops: ['Aguacate', 'Flores', 'Hortalizas', 'Café', 'Cacao', 'Plátano'],
            mainBenefit: 'Control biológico preventivo de pudriciones de raíz (Phytophthora, Rhizoctonia, Fusarium).',
            shortDesc: 'Biofungicida y promotor de crecimiento radicular formulado con micelio y esporas de Trichoderma concentradas.',
            fullDesc: 'BioTrop Trichoderma parasita y destruye las paredes celulares de los hongos fitopatógenos del suelo. Además, induce mecanismos de defensa sistémica adquirida (SAR) en la planta y solubiliza fósforo y micronutrientes atrapados en el suelo.',
            techSpecs: {
                solubility: 'Polvo humectable de suspensión fina',
                density: '0.6 g/cm³',
                phRange: 'Apto para suelos con pH 4.5 a 7.5',
                actionType: 'Micoparasitismo y competencia de nicho'
            },
            dosage: '1.0 - 2.0 kg/Ha en drenche o fertirriego al momento del trasplante o inicio de lluvias.',
            price: 98000,
            priceLabel: '$98.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/abonissa-solido.png?v=1759596133'
            ]
        },
        {
            id: 'prod-3',
            name: 'Amistar Top (Fungicida Sistémico de Amplio Espectro)',
            category: 'Fungicidas',
            brand: 'Syngenta',
            presentation: 'Envase de 1 Litro',
            availablePresentations: ['Frasco de 250 ml', 'Envase de 1 L', 'Garrafa de 5 L'],
            activeIngredient: 'Azoxistrobina 200 g/L + Difenoconazol 125 g/L',
            badge: 'Promoción',
            tagType: 'promociones',
            recommendedCrops: ['Arroz', 'Maíz', 'Papa', 'Cebolla', 'Frutales', 'Café'],
            mainBenefit: 'Doble acción curativa y preventiva contra roya, gota, mildeo polvoso y mancha de hierro.',
            shortDesc: 'Fungicida compuesto por una estrobilurina y un triazol que protegen el follaje nuevo con efecto verdor prolongado.',
            fullDesc: 'Amistar Top combina la acción mesostémica de la Azoxistrobina con la sistemia acropétala del Difenoconazol. Ofrece protección total del haz y envés de las hojas, inhibiendo la germinación de esporas y deteniendo la penetración micelial.',
            techSpecs: {
                solubility: 'Concentrado Suspensible (SC)',
                density: '1.12 g/ml',
                phRange: 'Estable en caldos de fumigación con pH 5.0 - 7.0',
                actionType: 'Inhibidor del transporte de electrones y biosíntesis de ergosterol'
            },
            dosage: '300 - 500 ml/Ha en aplicación foliar con volumen de agua adecuado.',
            price: 312000,
            priceLabel: '$312.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/IMAGENALTOSL.webp?v=1784839260',
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/AGRIMINS_CALCIO_BORO.png?v=1766779856'
            ]
        },
        {
            id: 'prod-4',
            name: 'Confidor Forte 200 SL (Insecticida Sistémico)',
            category: 'Insecticidas',
            brand: 'Bayer CropScience',
            presentation: 'Envase de 1 Litro',
            availablePresentations: ['Frasco de 100 ml', 'Envase de 1 L', 'Garrafa de 5 L'],
            activeIngredient: 'Imidacloprid 200 g/L',
            badge: 'Más Vendido',
            tagType: 'mas-vendidos',
            recommendedCrops: ['Citricos', 'Papa', 'Tomate', 'Pasma de Pastos', 'Algodón', 'Hortalizas'],
            mainBenefit: 'Erradicación rápida de insectos chupadores (Trips, Mosca Blanca, Pulgones y Chinches).',
            shortDesc: 'Insecticida neonicotinoide sistémico con excelente absorción foliar y radicular de largo efecto residual.',
            fullDesc: 'Confidor Forte actúa por contacto e ingestión bloqueando los receptores nicotínicos del sistema nervioso central del insecto. Transloca rápidamente dentro de la planta, protegiendo los brotes tiernos en crecimiento.',
            techSpecs: {
                solubility: 'Solución Concentrada (SL)',
                density: '1.09 g/ml',
                phRange: 'pH óptimo de mezcla: 6.0',
                actionType: 'Agonista del receptor nicotínico de acetilcolina'
            },
            dosage: '250 - 400 ml/Ha en aspersión foliar o 1.5 ml/L de agua en riego.',
            price: 275000,
            priceLabel: '$275.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/ACAREX-1.webp?v=1776875785',
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/c.png?v=1759596286'
            ]
        },
        {
            id: 'prod-5',
            name: 'Humus Organo-Mineral RIAGROUP Bio-Soil',
            category: 'Abonos',
            brand: 'RIAGROUP Bio',
            presentation: 'Saco de 40 kg',
            availablePresentations: ['Saco de 40 kg', 'Big Bag de 800 kg'],
            activeIngredient: 'Materia Orgánica 65% + Ácidos Húmicos y Fúlvicos 22% + NPK 3-2-4',
            badge: 'Nuevo',
            tagType: 'nuevos',
            recommendedCrops: ['Todos los cultivos', 'Aguacate', 'Cacao', 'Pasifloras', 'Hortalizas'],
            mainBenefit: 'Mejora la estructura del suelo, retención de agua e incrementa la capacidad de intercambio catiónico (CIC).',
            shortDesc: 'Acondicionador de suelo 100% orgánico compostado y enriquecido con microrganismos benéficos del suelo.',
            fullDesc: 'RIAGROUP Bio-Soil es una enmienda orgánica de alta madurez obtenida mediante bioprocesamiento de sustratos vegetales y lombricompuesto. Regenera la flora microbiana del suelo y descompacta capas duras.',
            techSpecs: {
                solubility: 'Insoluble en agua, de liberación edáfica gradual',
                density: '0.65 kg/L',
                phRange: 'pH 7.2 neutralizado',
                actionType: 'Mejorador de la fertilidad biológica y física del suelo'
            },
            dosage: '1.0 - 3.0 kg por árbol en mantenimiento o 2 a 4 Toneladas/Ha en siembra.',
            price: 55000,
            priceLabel: '$55.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/Biorganicoscompost.png?v=1764385392'
            ]
        },
        {
            id: 'prod-6',
            name: 'Enmienda Agrícola Cal Agrícola Dolomita 85%',
            category: 'Abonos',
            brand: 'RIAGROUP Bio',
            presentation: 'Saco de 50 kg',
            availablePresentations: ['Saco de 50 kg', 'Big Bag de 1.000 kg'],
            activeIngredient: 'Carbonato de Calcio CaCO3 55% + Carbonato de Magnesio MgCO3 35%',
            badge: 'Esencial',
            tagType: 'correctores-suelo',
            recommendedCrops: ['Suelos Ácidos', 'Café', 'Palma de Aceite', 'Pastos', 'Maíz', 'Frutales'],
            mainBenefit: 'Neutraliza la acidez del suelo (aluminio tóxico) y aporta Calcio y Magnesio asimilables.',
            shortDesc: 'Corrector edáfico molido a mallas finas para rápida reacción química y neutralización del pH en suelos ácidos.',
            fullDesc: 'La Cal Dolomita de RIAGROUP es fundamental para corregir suelos con pH inferior a 5.5. Elimina la toxicidad por Aluminio y Manganeso intercambiable, desbloqueando el Fósforo fijado en el suelo.',
            techSpecs: {
                solubility: 'Reacción gradual en presencia de humedad edáfica',
                density: '1.3 g/cm³',
                phRange: 'Eleva el pH de suelos ácidos hacia 6.0 - 6.5',
                actionType: 'Neutralización del H+ y Al3+ en el complejo de cambio'
            },
            dosage: '1.0 - 3.0 Toneladas/Ha según capacidad tampón del suelo y análisis de laboratorio.',
            price: 42000,
            priceLabel: '$42.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/Abimgra_potasio.png?v=1765315493'
            ]
        },
        {
            id: 'prod-7',
            name: 'Bioestimulante Foliar Bio-Algae 100% Orgánico',
            category: 'Fertilizantes',
            brand: 'Yara',
            presentation: 'Garrafa de 5 Litros',
            availablePresentations: ['Frasco de 1 L', 'Garrafa de 5 L', 'Caneca de 20 L'],
            activeIngredient: 'Extracto concentrado de Ascophyllum Nodosum 25% + Aminoácidos libres 12%',
            badge: 'Promoción',
            tagType: 'promociones',
            recommendedCrops: ['Flores', 'Aguacate', 'Cítricos', 'Hortalizas', 'Maracuyá', 'Uva'],
            mainBenefit: 'Supera el estrés por sequía, heladas o fitotoxicidad; estimula brotación y floración masiva.',
            shortDesc: 'Bioestimulante vegetal líquido formulado con algas marinas del Atlántico Norte enriquecido con oligoelementos.',
            fullDesc: 'Bio-Algae aporta citoquininas, auxinas, betaínas y manitol natural. Activa el metabolismo antioxidante de la planta, manteniendo la tasa fotosintética activa incluso en condiciones climáticas adversas.',
            techSpecs: {
                solubility: '100% Soluble en agua de aspersión',
                density: '1.18 g/ml',
                phRange: 'pH 5.0 - 6.5',
                actionType: 'Bioestimulación hormonal directa'
            },
            dosage: '1.0 - 2.0 L/Ha en aplicación foliar cada 15 a 20 días.',
            price: 145000,
            priceLabel: '$145.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/BETALGA.jpg?v=1759598978',
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/Agrimins_cosecha.png?v=1765556820'
            ]
        },
        {
            id: 'prod-8',
            name: 'Roundup Ultra Max 757 SG (Herbicida Sistémico)',
            category: 'Herbicidas',
            brand: 'Bayer CropScience',
            presentation: 'Caja de 10 kg (Gránulos Dispersables)',
            availablePresentations: ['Bolsa de 1 kg', 'Caja de 10 kg'],
            activeIngredient: 'Glifosato Sal Amonio 757 g/kg (SG)',
            badge: 'Más Vendido',
            tagType: 'mas-vendidos',
            recommendedCrops: ['Limpia de Terrenos', 'Cana de Azúcar', 'Palma', 'Frutales en Callejón'],
            mainBenefit: 'Control total no selectivo de malezas gramíneas, ciperáceas y de hoja ancha con raíces profundas.',
            shortDesc: 'Herbicida granulado de rápida disolución con tecnología Transorb II de translocación ultra rápida.',
            fullDesc: 'Roundup Ultra Max penetra a través de la cutícula foliar de las malezas en solo 1 hora tras la aplicación, translocándose hasta los meristemos y puntas de raíz. Garantiza un control duradero sin residuos en suelo.',
            techSpecs: {
                solubility: 'Gránulos Solubles (SG)',
                density: '0.70 g/cm³',
                phRange: 'Requiere acondicionamiento de agua a pH 4.5 - 5.5',
                actionType: 'Inhibidor de la enzima EPSPS'
            },
            dosage: '1.0 - 2.5 kg/Ha según la densidad y especie de maleza a controlar.',
            price: 320000,
            priceLabel: '$320.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/MANUPLA.png?v=1759598476',
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/AGRIMINS-INICIO.png?v=1759596323'
            ]
        },
        {
            id: 'prod-9',
            name: 'Vertimec 1.8 EC (Acaricida - Insecticida)',
            category: 'Insecticidas',
            brand: 'Syngenta',
            presentation: 'Envase de 1 Litro',
            availablePresentations: ['Frasco de 250 ml', 'Envase de 1 L'],
            activeIngredient: 'Abamectina 18 g/L',
            badge: 'Alta Eficiencia',
            tagType: 'acaricidas',
            recommendedCrops: ['Flores (Rosas)', 'Citricos', 'Fresa', 'Aguacate', 'Tomate'],
            mainBenefit: 'Control eficaz de ácaros (Arañita Roja) y minadores de la hoja con efecto translaminar.',
            shortDesc: 'Acaricida e insecticida de origen natural derivado de la fermentación de Streptomyces avermitilis.',
            fullDesc: 'Vertimec penetra rápidamente en el tejido foliar formando un depósito activo en el interior de la hoja que no se lava por lluvias. Controla adultos y ninfas de ácaros inhibiendo la transmisión de impulsos nerviosos.',
            techSpecs: {
                solubility: 'Concentrado Emulsionable (EC)',
                density: '0.98 g/ml',
                phRange: 'pH mezcla ideal: 5.5 - 6.5',
                actionType: 'Estimulador de la liberación del ácido gamma-aminobutírico (GABA)'
            },
            dosage: '300 - 500 ml/Ha o 50 ml por caneca de 200 Litros de agua.',
            price: 198000,
            priceLabel: '$198.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/acarex.png?v=1768841055',
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/Acarex_2-430x430.webp?v=1771795091'
            ]
        },
        {
            id: 'prod-10',
            name: 'Coadyuvante Pega-Adherente Break-Thru S-240',
            category: 'Fertilizantes',
            brand: 'Corteva',
            presentation: 'Envase de 1 Litro',
            availablePresentations: ['Frasco de 250 ml', 'Envase de 1 L', 'Garrafa de 5 L'],
            activeIngredient: 'Poliéter Polimetilsiloxano Copolímero 100%',
            badge: 'Tecnología Súper-Extensora',
            tagType: 'coadyuvantes',
            recommendedCrops: ['Todos los cultivos en aspersión foliar'],
            mainBenefit: 'Reduce la tensión superficial del agua a cero, permitiendo cubrimiento total y penetración estomática.',
            shortDesc: 'Súper humectante y penetrante organosiliconado de última generación para caldos agroquímicos.',
            fullDesc: 'Break-Thru S-240 multiplica por 10 el área de mojado de cada gota de aspersión. Evita el lavado por lluvias repentinas y mejora dramáticamente la eficacia de fungicidas, insecticidas y fertilizantes foliares.',
            techSpecs: {
                solubility: '100% Miscible en soluciones acuosas',
                density: '1.02 g/ml',
                phRange: 'Estable en pH 5.0 a 8.0',
                actionType: 'Reducción drástica de la tensión superficial acuosa'
            },
            dosage: '50 - 100 ml por cada 200 Litros de agua de mezcla.',
            price: 88000,
            priceLabel: '$88.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/carbolac.png?v=1768842355'
            ]
        },
        {
            id: 'prod-11',
            name: 'Regulador de Crecimiento Gib-Gro 20% SP (Ácido Giberélico)',
            category: 'Fertilizantes',
            brand: 'FMC Agro',
            presentation: 'Caja con 10 Sobres de 100 g',
            availablePresentations: ['Sobre de 100 g', 'Caja 1 kg'],
            activeIngredient: 'Ácido Giberélico (GA3) 200 g/kg',
            badge: 'Nuevo',
            tagType: 'nuevos',
            recommendedCrops: ['Uva', 'Cítricos', 'Arroz', 'Papas', 'Flores', 'Pastos'],
            mainBenefit: 'Estimula el alargamiento celular, aumento de tamaño de fruto y rompe la latencia de semillas.',
            shortDesc: 'Fytohormona concentrada en polvo soluble para regular el crecimiento vegetal y amarre de frutos.',
            fullDesc: 'Gib-Gro activa la división y elongación celular en zonas meristemáticas. En cítricos previene la caída prematura de fruto; en arroz promueve la salida uniforme de la panícula.',
            techSpecs: {
                solubility: 'Polvo Soluble (SP)',
                density: '0.45 g/cm³',
                phRange: 'pH de mezcla óptimo: 5.5 - 6.0',
                actionType: 'Inducción de síntesis enzimática de alfa-amilasa'
            },
            dosage: '10 - 30 g por cada 200 Litros de agua de aspersión.',
            price: 125000,
            priceLabel: '$125.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/HUMIN-1.jpg?v=1759596594'
            ]
        },
        {
            id: 'prod-12',
            name: 'Micronutrientes Quelatados Chelal Agro Mix',
            category: 'Fertilizantes',
            brand: 'Yara',
            presentation: 'Bolsa de 1 kg (Polvo Soluble)',
            availablePresentations: ['Bolsa de 1 kg', 'Caja de 10 kg'],
            activeIngredient: 'Fe-EDTA 4% + Zn-EDTA 4% + Mn-EDTA 3% + B 1.5% + Cu-EDTA 0.5% + Mo 0.1%',
            badge: 'Cero Deficiencias',
            tagType: 'micronutrientes',
            recommendedCrops: ['Aguacate', 'Café', 'Cítricos', 'Flores', 'Maíz', 'Hortalizas'],
            mainBenefit: 'Corrección inmediata de clorosis foliar e interveinal por deficiencias múltiples de oligoelementos.',
            shortDesc: 'Mezcla balanceada de microelementos 100% quelatados con EDTA para alta estabilidad química.',
            fullDesc: 'Chelal Agro Mix previene y corrige de forma rápida las carencias micro-nutricionales que limitan la fotosíntesis. Sus quelatos resisten la precipitación en caldos con pH alto o presencia de fosfatos.',
            techSpecs: {
                solubility: '100% Soluble en agua edáfica o foliar',
                density: '0.75 g/cm³',
                phRange: 'Estable en soluciones con pH de 3.5 a 8.5',
                actionType: 'Absorción por vía foliar y estomática'
            },
            dosage: '0.5 - 1.0 kg/Ha en fertirriego o aspersión foliar.',
            price: 165000,
            priceLabel: '$165.000',
            gallery: [
                'https://cdn.shopify.com/s/files/1/0671/5958/8995/files/Bacillus-subtillis-Bio-subtilis.jpg?v=1759596288'
            ]
        }
    ];

    /* --------------------------------------------------------------------------
       2. ELEMENTOS DEL DOM
       -------------------------------------------------------------------------- */
    const mainHeader = document.getElementById('mainHeader');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    const productsGrid = document.getElementById('productsGrid');
    const catalogSearch = document.getElementById('catalogSearch');
    const clearSearchBtn = document.getElementById('clearSearch');
    const categorySelect = document.getElementById('categorySelect');
    const brandSelect = document.getElementById('brandSelect');
    const cropSelect = document.getElementById('cropSelect');
    const emptyCatalog = document.getElementById('emptyCatalog');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const resetAllFilters = document.getElementById('resetAllFilters');
    const resultsCount = document.getElementById('resultsCount');

    const productModal = document.getElementById('productModal');
    const closeProductModal = document.getElementById('closeProductModal');
    const modalProductContent = document.getElementById('modalProductContent');

    const articleModal = document.getElementById('articleModal');
    const closeArticleModal = document.getElementById('closeArticleModal');
    const modalArticleContent = document.getElementById('modalArticleContent');

    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    /* --------------------------------------------------------------------------
       2b. CARRITO DE COTIZACIÓN – ESTADO, LÓGICA Y EXPERIENCIA DE USUARIO
       -------------------------------------------------------------------------- */

    // --- Estado del carrito ---
    let cart = [];

    // Referencias DOM del carrito
    const cartBtnTrigger      = document.getElementById('cartBtnTrigger');
    const cartCountBadge      = document.getElementById('cartCountBadge');
    const cartDrawerOverlay   = document.getElementById('cartDrawerOverlay');
    const cartDrawerPanel     = document.getElementById('cartDrawerPanel');
    const closeCartDrawerBtn  = document.getElementById('closeCartDrawerBtn');
    const cartHeaderCount     = document.getElementById('cartHeaderCount');
    const cartItemsContainer  = document.getElementById('cartItemsContainer');
    const cartViewItems       = document.getElementById('cartViewItems');
    const cartViewCheckout    = document.getElementById('cartViewCheckout');
    const cartEmptyState      = document.getElementById('cartEmptyState');
    const cartDrawerFooter    = document.getElementById('cartDrawerFooter');
    const cartTotalQuantity   = document.getElementById('cartTotalQuantity');
    const cartTotalPrice      = document.getElementById('cartTotalPrice');
    const clearCartBtn        = document.getElementById('clearCartBtn');
    const proceedToCheckoutBtn= document.getElementById('proceedToCheckoutBtn');
    const backToCartItemsBtn  = document.getElementById('backToCartItemsBtn');
    const cartCheckoutForm    = document.getElementById('cartCheckoutForm');
    const closeCartAndBrowseBtn = document.getElementById('closeCartAndBrowseBtn');

    const confirmDeleteModal  = document.getElementById('confirmDeleteModal');
    const cancelDeleteBtn     = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn    = document.getElementById('confirmDeleteBtn');
    const confirmProductInfo  = document.getElementById('confirmProductInfo');

    const confirmClearModal   = document.getElementById('confirmClearModal');
    const cancelClearBtn      = document.getElementById('cancelClearBtn');
    const confirmClearBtn     = document.getElementById('confirmClearBtn');
    const confirmClearSummary = document.getElementById('confirmClearSummary');

    const toastTitle          = document.getElementById('toastTitle');
    const toastSubtext        = document.getElementById('toastSubtext');

    let pendingDeleteProdId   = null;



    // --- Helpers ---
    const getTotalItems = () => cart.reduce((sum, item) => sum + item.qty, 0);

    const getTotalPrice = () => cart.reduce((sum, item) => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        return sum + (prod && prod.price ? prod.price * item.qty : 0);
    }, 0);

    const formatCOP = (val) => `$${val.toLocaleString('es-CO')}`;

    const updateCartBadge = () => {
        const total = getTotalItems();
        if (!cartCountBadge) return;
        cartCountBadge.textContent = total;
        if (total > 0) {
            cartCountBadge.classList.add('has-items');
            cartBtnTrigger.classList.add('cart-active');
        } else {
            cartCountBadge.classList.remove('has-items');
            cartBtnTrigger.classList.remove('cart-active');
        }
    };

    const updateCartSummary = () => {
        const totalItems = getTotalItems();
        const totalPrice = getTotalPrice();
        if (cartTotalQuantity) {
            cartTotalQuantity.textContent = `${totalItems} ítem${totalItems !== 1 ? 's' : ''}`;
        }
        if (cartHeaderCount) {
            cartHeaderCount.textContent = `(${totalItems} ítem${totalItems !== 1 ? 's' : ''})`;
        }
        if (cartTotalPrice) {
            cartTotalPrice.textContent = formatCOP(totalPrice);
        }
    };

    const renderCartItems = () => {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            // Mostrar estado vacío
            cartViewItems.classList.add('hidden');
            cartViewCheckout.classList.add('hidden');
            cartEmptyState.classList.remove('hidden');
            if (cartDrawerFooter) cartDrawerFooter.classList.add('hidden');
            updateCartBadge();
            updateCartSummary();
            return;
        }

        // Mostrar lista de productos
        cartViewItems.classList.remove('hidden');
        cartEmptyState.classList.add('hidden');
        if (cartDrawerFooter) cartDrawerFooter.classList.remove('hidden');

        cart.forEach(item => {
            const prod = PRODUCTS_DATA.find(p => p.id === item.id);
            if (!prod) return;

            const itemSubtotal = prod.price ? prod.price * item.qty : 0;

            const el = document.createElement('div');
            el.className = 'cart-item';
            el.setAttribute('data-cart-id', item.id);
            el.innerHTML = `
                <div class="cart-item-img">
                    <img src="${prod.gallery[0]}" alt="${prod.name}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <p class="cart-item-name">${prod.name}</p>
                    <span class="cart-item-cat">${prod.category} &bull; ${prod.brand}</span>
                    <span class="cart-item-pres"><i class="fa-solid fa-box-archive"></i> ${prod.presentation}</span>
                    <div class="cart-item-price-info">
                        <span class="cart-unit-price">${prod.priceLabel}</span>
                        <span class="cart-item-subtotal">Subtotal: <strong>${formatCOP(itemSubtotal)}</strong></span>
                    </div>
                    <div class="cart-item-qty-row">
                        <button class="qty-btn qty-dec" data-id="${item.id}" aria-label="Disminuir cantidad">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="qty-display">${item.qty}</span>
                        <button class="qty-btn qty-inc" data-id="${item.id}" aria-label="Aumentar cantidad">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}" aria-label="Eliminar producto">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;

            // Botón disminuir cantidad
            el.querySelector('.qty-dec').addEventListener('click', () => {
                const idx = cart.findIndex(c => c.id === item.id);
                if (idx !== -1) {
                    if (cart[idx].qty <= 1) {
                        requestRemoveFromCart(item.id);
                    } else {
                        cart[idx].qty--;
                        renderCartItems();
                        updateCartBadge();
                        updateCartSummary();
                    }
                }
            });

            // Botón aumentar cantidad
            el.querySelector('.qty-inc').addEventListener('click', () => {
                const idx = cart.findIndex(c => c.id === item.id);
                if (idx !== -1) {
                    cart[idx].qty++;
                    renderCartItems();
                    updateCartBadge();
                    updateCartSummary();
                }
            });

            // Botón eliminar
            el.querySelector('.cart-item-remove').addEventListener('click', () => {
                requestRemoveFromCart(item.id);
            });

            cartItemsContainer.appendChild(el);
        });

        updateCartBadge();
        updateCartSummary();
    };

    // --- Solicitar confirmación para eliminar producto ---
    const requestRemoveFromCart = (prodId) => {
        const prod = PRODUCTS_DATA.find(p => p.id === prodId);
        const cartItem = cart.find(item => item.id === prodId);
        if (!prod || !cartItem) return;

        pendingDeleteProdId = prodId;

        const subtotal = prod.price ? prod.price * cartItem.qty : 0;

        if (confirmProductInfo) {
            confirmProductInfo.innerHTML = `
                <div class="confirm-prod-chip">
                    <img src="${prod.gallery[0]}" alt="${prod.name}">
                    <div class="confirm-prod-details">
                        <strong class="confirm-prod-title">${prod.name}</strong>
                        <span class="confirm-prod-meta">${prod.presentation} &bull; ${cartItem.qty} unidad${cartItem.qty !== 1 ? 'es' : ''}</span>
                        <div class="confirm-prod-price-row">
                            <span class="confirm-unit-price">${prod.priceLabel} c/u</span>
                            <span class="confirm-subtotal">Subtotal: <strong>${formatCOP(subtotal)}</strong></span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (confirmDeleteModal) {
            confirmDeleteModal.classList.remove('hidden');
        }
    };

    const closeConfirmDeleteModal = () => {
        pendingDeleteProdId = null;
        if (confirmDeleteModal) {
            confirmDeleteModal.classList.add('hidden');
        }
    };

    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', closeConfirmDeleteModal);
    }

    if (confirmDeleteModal) {
        confirmDeleteModal.addEventListener('click', (e) => {
            if (e.target === confirmDeleteModal) closeConfirmDeleteModal();
        });
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            if (pendingDeleteProdId) {
                const prod = PRODUCTS_DATA.find(p => p.id === pendingDeleteProdId);
                removeFromCart(pendingDeleteProdId);
                closeConfirmDeleteModal();
                showCustomToast('Producto eliminado', prod ? `${prod.name.substring(0, 30)}...` : 'Eliminado del carrito', 'delete');
            }
        });
    }

    // --- Solicitar confirmación para vaciar todo el carrito ---
    const requestClearCart = () => {
        if (cart.length === 0) return;

        const totalItems = getTotalItems();
        const totalPrice = getTotalPrice();

        if (confirmClearSummary) {
            confirmClearSummary.innerHTML = `
                <div class="confirm-prod-chip">
                    <div class="confirm-clear-badge">
                        <i class="fa-solid fa-boxes-stacked"></i>
                    </div>
                    <div class="confirm-prod-details">
                        <strong class="confirm-prod-title">Resumen de la orden a vaciar</strong>
                        <span class="confirm-prod-meta">${totalItems} producto${totalItems !== 1 ? 's' : ''} en total</span>
                        <div class="confirm-prod-price-row">
                            <span class="confirm-unit-price">Valor acumulado:</span>
                            <span class="confirm-subtotal"><strong>${formatCOP(totalPrice)}</strong></span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (confirmClearModal) {
            confirmClearModal.classList.remove('hidden');
        }
    };

    const closeConfirmClearModal = () => {
        if (confirmClearModal) {
            confirmClearModal.classList.add('hidden');
        }
    };

    if (cancelClearBtn) {
        cancelClearBtn.addEventListener('click', closeConfirmClearModal);
    }

    if (confirmClearModal) {
        confirmClearModal.addEventListener('click', (e) => {
            if (e.target === confirmClearModal) closeConfirmClearModal();
        });
    }

    if (confirmClearBtn) {
        confirmClearBtn.addEventListener('click', () => {
            clearCart();
            closeConfirmClearModal();
            showCustomToast('Carrito vaciado', 'Se han eliminado todos los productos', 'delete');
        });
    }


    // --- Agregar al carrito ---
    const addToCart = (prodId) => {
        const prod = PRODUCTS_DATA.find(p => p.id === prodId);
        if (!prod) return;

        const existing = cart.find(item => item.id === prodId);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ id: prodId, qty: 1 });
        }

        updateCartBadge();
        updateCartSummary();
        showCartToast(prod.name);

        // Animación del badge
        if (cartCountBadge) {
            cartCountBadge.classList.add('badge-bump');
            setTimeout(() => cartCountBadge.classList.remove('badge-bump'), 400);
        }
        if (cartBtnTrigger) {
            cartBtnTrigger.classList.add('cart-btn-pulse');
            setTimeout(() => cartBtnTrigger.classList.remove('cart-btn-pulse'), 600);
        }
    };

    // --- Eliminar del carrito ---
    const removeFromCart = (prodId) => {
        cart = cart.filter(item => item.id !== prodId);
        renderCartItems();
        updateCartBadge();
        updateCartSummary();
    };

    // --- Vaciar carrito ---
    const clearCart = () => {
        cart = [];
        renderCartItems();
        updateCartBadge();
        updateCartSummary();
    };

    // --- Abrir / Cerrar el panel del carrito ---
    const openCartDrawer = () => {
        cartViewCheckout.classList.add('hidden');
        cartViewItems.classList.remove('hidden');
        renderCartItems();
        cartDrawerOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            cartDrawerOverlay.classList.add('cart-drawer-open');
        });
    };

    const closeCartDrawer = () => {
        cartDrawerOverlay.classList.remove('cart-drawer-open');
        setTimeout(() => {
            cartDrawerOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }, 380);
    };

    // --- Toast personalizado y profesional ---
    const showCustomToast = (title, subtext, type = 'add') => {
        if (!toast) return;
        if (toastTitle) toastTitle.textContent = title;
        if (toastSubtext) toastSubtext.textContent = subtext;

        const iconEl = toast.querySelector('.toast-icon');
        if (iconEl) {
            if (type === 'delete') {
                iconEl.className = 'fa-solid fa-trash-can toast-icon delete-icon';
            } else {
                iconEl.className = 'fa-solid fa-circle-check toast-icon';
            }
        }

        toast.classList.remove('hidden');
        toast.classList.toggle('toast-delete', type === 'delete');
        toast.classList.toggle('toast-cart', type === 'add');

        clearTimeout(window._toastTimer);
        window._toastTimer = setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    };

    const showCartToast = (productName) => {
        const shortName = productName.length > 32 ? productName.substring(0, 32) + '…' : productName;
        showCustomToast('¡Agregado con éxito!', shortName, 'add');
    };


    // --- Construir y enviar mensaje de WhatsApp (COMPRA) ---
    const buildWhatsAppMessage = (clientData) => {
        const { name, phone, city, dept, farm, notes } = clientData;

        let productLines = '';
        cart.forEach((item, index) => {
            const prod = PRODUCTS_DATA.find(p => p.id === item.id);
            if (prod) {
                const subtotal = prod.price ? prod.price * item.qty : 0;
                productLines += `\n${index + 1}. *${prod.name}*`;
                productLines += `\n   - Presentacion: ${prod.presentation}`;
                productLines += `\n   - Cantidad: ${item.qty} unidad(es)`;
                productLines += `\n   - Precio Unitario: ${prod.priceLabel}`;
                productLines += `\n   - Subtotal: ${formatCOP(subtotal)}`;
                productLines += `\n   - Marca: ${prod.brand}\n`;
            }
        });

        const totalItems = getTotalItems();
        const totalPrice = getTotalPrice();

        let message = `----------------------------------------\n`;
        message += `*NUEVO PEDIDO DE COMPRA - RIAGROUP SAS*\n`;
        message += `[TIPO: ORDEN DE COMPRA]\n`;
        message += `----------------------------------------\n\n`;
        message += `*DATOS DEL CLIENTE Y ENVIO*\n`;
        message += `- *Nombre:* ${name}\n`;
        message += `- *Telefono:* ${phone}\n`;
        message += `- *Municipio / Ciudad:* ${city}\n`;
        message += `- *Departamento:* ${dept}\n`;
        if (farm) message += `- *Finca / Direccion:* ${farm}\n`;
        message += `\n`;
        message += `*PRODUCTOS SELECCIONADOS*\n`;
        message += productLines;
        message += `\n`;
        message += `----------------------------------------\n`;
        message += `- *Cantidad de productos:* ${totalItems} item(s)\n`;
        message += `- *TOTAL A PAGAR:* ${formatCOP(totalPrice)}\n`;
        message += `----------------------------------------\n`;
        if (notes) {
            message += `\n*Notas de entrega:*\n${notes}\n`;
        }
        message += `\nHola, deseo confirmar este pedido de compra para coordinar el pago y la entrega de los productos.`;

        return message;
    };

    // --- Construir mensaje de WhatsApp (COTIZACIÓN) ---
    const buildQuoteWhatsAppMessage = (quoteData) => {
        const { name, company, phone, email, category, messageText } = quoteData;

        let message = `----------------------------------------\n`;
        message += `*SOLICITUD DE COTIZACION - RIAGROUP SAS*\n`;
        message += `[TIPO: SOLICITUD DE COTIZACION]\n`;
        message += `----------------------------------------\n\n`;
        message += `*DATOS DEL SOLICITANTE*\n`;
        message += `- *Nombre:* ${name}\n`;
        message += `- *Telefono:* ${phone}\n`;
        if (email) message += `- *Correo:* ${email}\n`;
        if (company) message += `- *Finca / Empresa:* ${company}\n`;
        message += `\n`;
        message += `*DETALLES DE LA COTIZACION*\n`;
        message += `- *Linea / Categoria de interes:* ${category}\n`;
        message += `- *Requerimiento especifico:* ${messageText}\n`;
        message += `\n----------------------------------------\n`;
        message += `Hola, solicito una cotización formal y asesoría técnica para los insumos indicados.`;

        return message;
    };





    // --- Event Listeners del carrito ---
    if (cartBtnTrigger) {
        cartBtnTrigger.addEventListener('click', openCartDrawer);
    }
    if (closeCartDrawerBtn) {
        closeCartDrawerBtn.addEventListener('click', closeCartDrawer);
    }
    if (cartDrawerOverlay) {
        cartDrawerOverlay.addEventListener('click', (e) => {
            if (e.target === cartDrawerOverlay) closeCartDrawer();
        });
    }
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            requestClearCart();
        });
    }

    if (proceedToCheckoutBtn) {
        proceedToCheckoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            cartViewItems.classList.add('hidden');
            cartViewCheckout.classList.remove('hidden');
            cartViewCheckout.scrollTop = 0;
        });
    }
    if (backToCartItemsBtn) {
        backToCartItemsBtn.addEventListener('click', () => {
            cartViewCheckout.classList.add('hidden');
            cartViewItems.classList.remove('hidden');
        });
    }
    if (closeCartAndBrowseBtn) {
        closeCartAndBrowseBtn.addEventListener('click', () => {
            closeCartDrawer();
            setTimeout(() => {
                const catalogSection = document.getElementById('catalogo');
                if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
            }, 420);
        });
    }
    if (cartCheckoutForm) {
        cartCheckoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name  = document.getElementById('cartClientName').value.trim();
            const phone = document.getElementById('cartClientPhone').value.trim();
            const city  = document.getElementById('cartClientCity').value.trim();
            const dept  = document.getElementById('cartClientDept').value.trim();
            const farm  = document.getElementById('cartClientFarm').value.trim();
            const notes = document.getElementById('cartClientNotes').value.trim();

            const msg = buildWhatsAppMessage({ name, phone, city, dept, farm, notes });
            const waNumber = '573168682592';
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');


            // Limpiar carrito y cerrar
            clearCart();
            cartCheckoutForm.reset();
            cartViewCheckout.classList.add('hidden');
            cartViewItems.classList.remove('hidden');
            closeCartDrawer();
            if (toast && toastMessage) {
                toastMessage.innerHTML = `<strong>¡Solicitud enviada!</strong> Te redirigimos a WhatsApp.`;
                toast.classList.remove('hidden');
                clearTimeout(window._toastTimer);
                window._toastTimer = setTimeout(() => toast.classList.add('hidden'), 4500);
            }
        });
    }

    // Inicializar el estado vacío del carrito al cargar
    updateCartBadge();
    updateCartSummary();
    if (cartEmptyState) cartEmptyState.classList.remove('hidden');
    if (cartViewItems) cartViewItems.classList.add('hidden');
    if (cartViewCheckout) cartViewCheckout.classList.add('hidden');
    if (cartDrawerFooter) cartDrawerFooter.classList.add('hidden');

    /* --------------------------------------------------------------------------
       3. ENCABEZADO STICKY & MENÚ RESPONSIVO & SCROLL SPY
       -------------------------------------------------------------------------- */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainHeader.classList.add('scrolled');
            scrollTopBtn.classList.add('visible');
        } else {
            mainHeader.classList.remove('scrolled');
            scrollTopBtn.classList.remove('visible');
        }

        // ScrollSpy activo para las 9 secciones
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    const toggleMenu = () => {
        navMenu.classList.toggle('open');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    };

    if (mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu);

    const mobileNavClose = document.getElementById('mobileNavClose');
    if (mobileNavClose) mobileNavClose.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open')) toggleMenu();

            // Set active class manually on click
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* --------------------------------------------------------------------------
       4. BUSCADOR INTELIGENTE & RENDERIZADO DE PRODUCTOS (5 COLUMNAS MINIMALISTA)
       -------------------------------------------------------------------------- */
    const renderProducts = (products) => {
        if (!productsGrid) return;
        productsGrid.innerHTML = '';

        if (products.length === 0) {
            emptyCatalog.classList.remove('hidden');
            return;
        }

        emptyCatalog.classList.add('hidden');

        products.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'pcard reveal active';
            card.setAttribute('data-id', prod.id);

            const priceTag = prod.price ? prod.price : 'Consultar Precio';

            card.innerHTML = `
                <span class="pcard-badge">${prod.badge}</span>
                <div class="pcard-img-wrap">
                    <img src="${prod.gallery[0]}" alt="${prod.name}" loading="lazy">
                    <div class="pcard-img-overlay">
                        <button class="pcard-overlay-btn view-details-trigger" data-id="${prod.id}">
                            <i class="fa-solid fa-eye"></i> Ver Detalles
                        </button>
                    </div>
                </div>
                <div class="pcard-body">
                    <span class="pcard-cat">${prod.category}</span>
                    <h3 class="pcard-name">${prod.name}</h3>
                    <div class="pcard-brand">
                        <span class="pcard-brand-dot"></span>
                        <span>Marca: <strong>${prod.brand}</strong></span>
                    </div>
                    <div class="pcard-footer">
                        <span class="pcard-price">${prod.priceLabel}</span>
                        <div class="pcard-actions">
                            <button class="pcard-icon-btn pcard-btn-cart" data-id="${prod.id}" title="Agregar al carrito de cotización" aria-label="Agregar al carrito">
                                <i class="fa-solid fa-cart-plus"></i>
                                <span class="pcard-btn-tooltip">Agregar</span>
                            </button>
                            <button class="pcard-icon-btn pcard-btn-detail view-details-trigger" data-id="${prod.id}" title="Ver ficha completa del producto" aria-label="Ver detalles">
                                <i class="fa-solid fa-eye"></i>
                                <span class="pcard-btn-tooltip">Ver detalles</span>
                            </button>
                        </div>
                    </div>

                </div>
            `;

            // Event listener para el botón Agregar al Carrito en la tarjeta
            const addBtn = card.querySelector('.pcard-btn-cart');
            if (addBtn) {
                addBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addToCart(prod.id);
                });
            }

            // Event listener al dar clic en la tarjeta o botón Ver Detalles para abrir modal
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.pcard-btn-cart')) {
                    openProductModal(prod.id);
                }
            });

            productsGrid.appendChild(card);
        });
    };

    const filterProducts = () => {
        const searchTerm = catalogSearch ? catalogSearch.value.toLowerCase().trim() : '';
        const selectedCategory = categorySelect ? categorySelect.value : 'all';
        const selectedBrand = brandSelect ? brandSelect.value : 'all';
        const selectedCrop = cropSelect ? cropSelect.value : 'all';

        if (clearSearchBtn) {
            clearSearchBtn.style.display = searchTerm.length > 0 ? 'flex' : 'none';
        }

        let filtered = PRODUCTS_DATA.filter(prod => {
            const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
            const matchesBrand = selectedBrand === 'all' || prod.brand === selectedBrand;
            const matchesCrop = selectedCrop === 'all' ||
                prod.recommendedCrops.some(c => c.toLowerCase().includes(selectedCrop.toLowerCase()));
            const matchesSearch = !searchTerm ||
                prod.name.toLowerCase().includes(searchTerm) ||
                prod.brand.toLowerCase().includes(searchTerm) ||
                prod.activeIngredient.toLowerCase().includes(searchTerm) ||
                prod.fullDesc.toLowerCase().includes(searchTerm);

            return matchesCategory && matchesBrand && matchesCrop && matchesSearch;
        });

        if (resultsCount) {
            if (filtered.length === PRODUCTS_DATA.length) {
                resultsCount.innerHTML = `<i class="fa-solid fa-boxes-stacked"></i> Mostrando <strong>${filtered.length}</strong> productos agrícolas`;
            } else {
                resultsCount.innerHTML = `<i class="fa-solid fa-filter"></i> <strong>${filtered.length}</strong> producto${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
            }
        }

        renderProducts(filtered);
    };

    // Simple 4-filter event listeners
    if (catalogSearch) catalogSearch.addEventListener('input', filterProducts);
    if (categorySelect) categorySelect.addEventListener('change', filterProducts);
    if (brandSelect) brandSelect.addEventListener('change', filterProducts);
    if (cropSelect) cropSelect.addEventListener('change', filterProducts);

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            catalogSearch.value = '';
            filterProducts();
        });
    }

    const doResetFilters = () => {
        if (catalogSearch) catalogSearch.value = '';
        if (categorySelect) categorySelect.value = 'all';
        if (brandSelect) brandSelect.value = 'all';
        if (cropSelect) cropSelect.value = 'all';
        filterProducts();
    };

    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', doResetFilters);
    if (resetAllFilters) resetAllFilters.addEventListener('click', doResetFilters);

    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            if (categorySelect) {
                categorySelect.value = cat || 'all';
            }
            const catalogElem = document.getElementById('catalogo');
            if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
            filterProducts();
        });
    });

    filterProducts();

    /* --------------------------------------------------------------------------
       5. PÁGINA INDEPENDIENTE DE DETALLES DE PRODUCTO (FULL MODAL PANEL)
       -------------------------------------------------------------------------- */
    const openProductModal = (prodId) => {
        const prod = PRODUCTS_DATA.find(p => p.id === prodId);
        if (!prod) return;

        const breadcrumb = document.getElementById('pdetailBreadcrumb');
        if (breadcrumb) {
            breadcrumb.innerHTML = `Catálogo &rsaquo; ${prod.category} &rsaquo; <strong>${prod.name}</strong>`;
        }

        const related = PRODUCTS_DATA.filter(p => p.id !== prod.id && p.category === prod.category).slice(0, 4);
        const fallbackRelated = related.length < 4 ? PRODUCTS_DATA.filter(p => p.id !== prod.id).slice(0, 4) : related;

        const priceDisplay = prod.priceLabel ? prod.priceLabel : 'Bajo Cotización Directa';

        modalProductContent.innerHTML = `
            <!-- Hero Grid: Galería + Información Principal -->
            <div class="pd-hero">
                <!-- Galería de imágenes -->
                <div class="pd-gallery">
                    <div class="pd-main-img">
                        <img id="pdMainImg" src="${prod.gallery[0]}" alt="${prod.name}">
                    </div>
                    ${prod.gallery.length > 1 ? `
                        <div class="pd-thumbs">
                            ${prod.gallery.map((img, idx) => `
                                <div class="pd-thumb ${idx === 0 ? 'active' : ''}" onclick="changePdImage('${img}', this)">
                                    <img src="${img}" alt="Vista previa ${idx + 1}">
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>

                <!-- Panel de Información -->
                <div class="pd-info">
                    <span class="pd-cat-badge">
                        <i class="fa-solid fa-leaf"></i> ${prod.category} &bull; ${prod.badge}
                    </span>

                    <h1 class="pd-title">${prod.name}</h1>

                    <div class="pd-brand-row">
                        <div class="pd-brand-chip">
                            <i class="fa-solid fa-copyright"></i> Marca: <strong>${prod.brand}</strong>
                        </div>
                        <div class="pd-presentation-chip">
                            <i class="fa-solid fa-box-archive"></i> ${prod.presentation}
                        </div>
                    </div>

                    <!-- Precio destacado -->
                    <div style="background:var(--soft-green-bg); border:1px solid rgba(45,106,79,0.18); padding:1rem 1.4rem; border-radius:12px; display:flex; align-items:center; justify-content:space-between;">
                        <div>
                            <span style="font-size:0.78rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; display:block;">Precio Estimado / Tarifa</span>
                            <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:var(--accent-green);">${priceDisplay}</span>
                        </div>
                        <span style="font-size:0.8rem; background:var(--primary-green); color:#fff; padding:0.3rem 0.8rem; border-radius:999px; font-weight:700;">
                            <i class="fa-solid fa-truck-fast"></i> Envío Nacional
                        </span>
                    </div>

                    <!-- Descripción Corta y Detallada -->
                    <div class="pd-desc">
                        <p style="font-weight:600; color:var(--primary-dark); margin-bottom:0.5rem;">${prod.shortDesc}</p>
                        <p style="margin:0; font-size:0.92rem; color:var(--text-muted);">${prod.fullDesc}</p>
                    </div>

                    <!-- Beneficio Clave -->
                    <div class="pd-main-benefit">
                        <div class="pd-main-benefit-icon">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="pd-main-benefit-text">
                            <strong>Beneficio Principal de Rendimiento</strong>
                            <p>${prod.mainBenefit}</p>
                        </div>
                    </div>

                    <!-- Presentaciones Disponibles -->
                    <div>
                        <span style="font-size:0.84rem; font-weight:700; color:var(--primary-dark); display:block; margin-bottom:0.5rem;">
                            <i class="fa-solid fa-boxes-packing"></i> Presentaciones Disponibles para Distribución:
                        </span>
                        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                            ${prod.availablePresentations.map(pres => `
                                <span style="background:#ffffff; border:1px solid var(--border-color); padding:0.35rem 0.85rem; border-radius:20px; font-size:0.82rem; font-weight:600; color:var(--text-dark);">
                                    <i class="fa-solid fa-check" style="color:var(--accent-green);"></i> ${pres}
                                </span>
                            `).join('')}
                        </div>
                    </div>

                    <!-- CTA Buttons (Agregar al Carrito + Cotizar Inmediato) -->
                    <div class="pd-cta-group">
                        <button class="btn btn-green btn-lg" id="modalAddToCartBtn" data-id="${prod.id}" style="flex:1;">
                            <i class="fa-solid fa-cart-plus"></i> Agregar al Carrito
                        </button>
                        <a href="https://wa.me/573000000000?text=Hola%20RIAGROUP%20SAS,%20deseo%20solicitar%20una%20cotización%20formal%20del%20producto:%20${encodeURIComponent(prod.name)}%20(${encodeURIComponent(prod.presentation)})" target="_blank" class="pd-btn-cotizar" style="flex:1;">
                            <i class="fa-brands fa-whatsapp" style="font-size:1.3rem;"></i> Cotizar Inmediato
                        </a>
                    </div>
                </div>
            </div>

            <!-- Ficha Técnica, Cultivos & Dosis -->
            <div class="pd-sections">
                <!-- Columna Izquierda: Especificaciones e Ingrediente Activo -->
                <div>
                    <h3 class="pd-section-title">
                        <i class="fa-solid fa-clipboard-list"></i> Ficha Técnica & Especificaciones
                    </h3>

                    <table class="pd-specs-table">
                        <tbody>
                            <tr>
                                <td>Ingrediente Activo / Composición</td>
                                <td><strong style="color:var(--accent-green);">${prod.activeIngredient}</strong></td>
                            </tr>
                            ${prod.techSpecs ? `
                                <tr>
                                    <td>Formulación / Solubilidad</td>
                                    <td>${prod.techSpecs.solubility}</td>
                                </tr>
                                <tr>
                                    <td>Densidad / Concentración</td>
                                    <td>${prod.techSpecs.density}</td>
                                </tr>
                                <tr>
                                    <td>Rango de pH de Aplicación</td>
                                    <td>${prod.techSpecs.phRange}</td>
                                </tr>
                                <tr>
                                    <td>Modo / Tipo de Acción</td>
                                    <td>${prod.techSpecs.actionType}</td>
                                </tr>
                            ` : ''}
                            <tr>
                                <td>Registro Fitosanitario / Agrícola</td>
                                <td>Vigente con Certificación Oficial Colombia (ICA)</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Bloque de Registro ICA -->
                    <div class="pd-ica-block">
                        <i class="fa-solid fa-shield-halved"></i>
                        <div>
                            <h5>Garantía de Calidad y Asesoría Agronómica</h5>
                            <p>Producto certificado original suministrado directamente por distribuidores autorizados. Incluye acompañamiento técnico en campo sin costo adicional.</p>
                        </div>
                    </div>
                </div>

                <!-- Columna Derecha: Cultivos & Dosis -->
                <div>
                    <h3 class="pd-section-title">
                        <i class="fa-solid fa-wheat-awn"></i> Cultivos Recomendados
                    </h3>
                    <div class="pd-crops-list">
                        ${prod.recommendedCrops.map(crop => `
                            <span class="pd-crop-tag">
                                <i class="fa-solid fa-seedling"></i> ${crop}
                            </span>
                        `).join('')}
                    </div>

                    <h3 class="pd-section-title" style="margin-top:2rem;">
                        <i class="fa-solid fa-prescription-bottle"></i> Dosis & Modo de Uso
                    </h3>
                    <div class="pd-dosage-block">
                        <h5>Recomendaciones Generales:</h5>
                        <p>${prod.dosage}</p>
                    </div>
                </div>
            </div>

            <!-- Seccion Productos Relacionados -->
            <div class="pd-related-section">
                <div class="pd-related-section-header">
                    <h3 class="pd-section-title" style="border:none; margin:0;">
                        <i class="fa-solid fa-boxes-stacked"></i> Productos Relacionados en ${prod.category}
                    </h3>
                </div>
                <div class="pd-related-grid">
                    ${fallbackRelated.map(rel => `
                        <div class="pd-related-card" onclick="openProductModal('${rel.id}')">
                            <img src="${rel.gallery[0]}" alt="${rel.name}">
                            <div class="pd-related-card-body">
                                <h4 class="pd-related-card-name">${rel.name}</h4>
                                <span class="pd-related-card-brand">${rel.brand} &bull; ${rel.presentation}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Event listener para el botón "Agregar al Carrito" dentro del modal
        const modalAddBtn = modalProductContent.querySelector('#modalAddToCartBtn');
        if (modalAddBtn) {
            modalAddBtn.addEventListener('click', () => {
                addToCart(prod.id);
            });
        }

        // Mostrar overlay de modal full-page
        productModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Scroll al inicio del modal
        const panel = productModal.querySelector('.pdetail-panel');
        if (panel) panel.scrollTop = 0;
    };

    // Helper global para cambiar imagen en la galería del modal
    window.changePdImage = (src, thumbElem) => {
        const mainImg = document.getElementById('pdMainImg');
        if (mainImg) mainImg.src = src;
        document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
        if (thumbElem) thumbElem.classList.add('active');
    };

    if (closeProductModal) {
        closeProductModal.addEventListener('click', () => {
            productModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }

    /* --------------------------------------------------------------------------
       6. MODAL DE ARTÍCULOS DEL BLOG AGRÓNOMO
       -------------------------------------------------------------------------- */
    const ARTICLES_DATA = {
        '1': {
            title: 'Cómo Diagnosticar y Corregir Deficiencias de Micronutrientes (Boro y Zinc)',
            date: '22 Julio, 2026',
            author: 'Ing. Fernando Morales - Especialista en Nutrición Foliar',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
            content: `
                <p>Las deficiencias de microelementos como el Boro (B) y Zinc (Zn) representan una de las mayores causas ocultas de pérdida de rendimiento en cultivos de aguacate, café, cítricos y frutales.</p>
                <h4>Síntomas Principales:</h4>
                <ul>
                    <li><strong>Deficiencia de Boro:</strong> Deformación de hojas jóvenes, malformación de frutos y muerte de meristemos apicales.</li>
                    <li><strong>Deficiencia de Zinc:</strong> Clorosis arrocetada, entrenudos cortos y hojas pequeñas.</li>
                </ul>
                <p>En RIAGROUP SAS recomendamos aplicaciones foliares quelatadas con Chelal Agro Mix para una corrección rápida antes del periodo crítico de floración.</p>
            `
        },
        '2': {
            title: 'Manejo Integrado de la Gota en Papa y Tomate mediante Fungicidas Sistémicos',
            date: '16 Julio, 2026',
            author: 'Ing. Patricia Silva - Asesora Fitosanitaria',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
            content: `
                <p>El tizón tardío o gota (Phytophthora infestans) puede destruir una hectárea de cultivo en solo 72 horas bajo condiciones de alta humedad relativa y temperaturas moderadas.</p>
                <h4>Estrategia de Rotación Recomendada por RIAGROUP:</h4>
                <ul>
                    <li>Aplicación preventiva con estrobilurinas en etapas tempranas.</li>
                    <li>Uso de triazoles sistémicos como Amistar Top ante los primeros síntomas visibles.</li>
                </ul>
            `
        },
        '3': {
            title: 'Uso de Bioestimulantes a Base de Algas Marinas para Superar el Estrés Hídrico',
            date: '08 Julio, 2026',
            author: 'Dr. Alejandro Ruiz - Microbiólogo Agrícola',
            image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
            content: `
                <p>Las sequías prolongadas generan la acumulación de especies reactivas de oxígeno (ROS) que destruyen el aparato fotosintético de las plantas. El uso de extractos purificados de Ascophyllum nodosum actúa como un potente osmoprotector natural.</p>
            `
        }
    };

    document.querySelectorAll('.btn-read-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const articleId = e.currentTarget.getAttribute('data-article');
            const art = ARTICLES_DATA[articleId];
            if (!art) return;

            modalArticleContent.innerHTML = `
                <img src="${art.image}" alt="${art.title}" style="width:100%; height:320px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;">
                <span class="section-tag" style="margin-bottom:0.8rem;"><i class="fa-solid fa-newspaper"></i> Artículo Agrónomo</span>
                <h2 style="font-size:1.8rem; margin-bottom:0.5rem; color:var(--primary-dark);">${art.title}</h2>
                <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem;">
                    <span><i class="fa-regular fa-calendar"></i> ${art.date}</span> | <span><i class="fa-regular fa-user"></i> ${art.author}</span>
                </div>
                <div class="article-body" style="font-size:1rem; line-height:1.7; color:var(--text-dark);">
                    ${art.content}
                </div>
                <div style="margin-top:2rem; padding-top:1rem; border-top:1px solid var(--border-color); text-align:right;">
                    <button class="btn btn-green" onclick="document.getElementById('articleModal').classList.add('hidden'); document.body.style.overflow='';">Cerrar Artículo</button>
                </div>
            `;

            articleModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeArticleModal) {
        closeArticleModal.addEventListener('click', () => {
            articleModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    if (articleModal) {
        articleModal.addEventListener('click', (e) => {
            if (e.target === articleModal) {
                articleModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }

    /* --------------------------------------------------------------------------
       7. ANIMACIÓN DE CONTADORES NUMÉRICOS
       -------------------------------------------------------------------------- */
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 60;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = (counter.innerText.startsWith('+') ? '+' : '') + Math.ceil(count) + (target === 99 ? '%' : '');
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = (target === 15 || target === 5000 || target === 850 ? '+' : '') + target.toLocaleString() + (target === 99 ? '%' : '');
                }
            };
            updateCount();
        });
    };

    let animatedStats = false;
    const heroStatsElem = document.querySelector('.hero-stats');

    if (heroStatsElem) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animatedStats) {
                animatedStats = true;
                animateCounters();
            }
        }, { threshold: 0.5 });
        observer.observe(heroStatsElem);
    }

    /* --------------------------------------------------------------------------
       8. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
       -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* --------------------------------------------------------------------------
       9. FORMULARIO DE CONTACTO & NOTIFICACIONES (TOAST)
       -------------------------------------------------------------------------- */
    const showToast = (message) => {
        if (!toast || !toastMessage) return;
        toastMessage.innerText = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('fullName').value.trim();
            const company = document.getElementById('companyName') ? document.getElementById('companyName').value.trim() : '';
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const category = document.getElementById('interestCategory').value;
            const messageText = document.getElementById('message').value.trim();

            const msg = buildQuoteWhatsAppMessage({ name, company, phone, email, category, messageText });
            const waNumber = '573168682592';
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');

            showToast(`¡Gracias ${name}! Tu solicitud de cotización ha sido enviada a WhatsApp.`);
            contactForm.reset();
        });
    }


    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Te has suscrito exitosamente al Boletín Agrónomo de RIAGROUP SAS.');
            newsletterForm.reset();
        });
    }

    /* --------------------------------------------------------------------------
       10. RESTRICCIÓN STRICTA DE CAMPOS TELEFÓNICOS (SOLO NÚMEROS)
       -------------------------------------------------------------------------- */
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        // Filtrar inmediatamente cualquier carácter no numérico al escribir o pegar
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });

        // Bloquear teclas que no sean números ni teclas de navegación/borrado
        input.addEventListener('keydown', (e) => {
            const allowedKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
            if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
                return;
            }
            if (!/^\d$/.test(e.key)) {
                e.preventDefault();
            }
        });
    });
});

