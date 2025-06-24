"use client"

import { useState } from "react"
import { Truck, Heart, Utensils, Cookie, Sandwich, Globe, Package, Subtitles,Coffee , HandPlatter } from "lucide-react"
import { title } from "process"
import { urlToHttpOptions } from "url"
import { option } from "motion/react-client"
import { color } from "motion"
import { Esteban } from "next/font/google"

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("arepera")
  const [activeSubCategory, setActiveSubCategory] = useState("arepas")

  
    // 1️⃣ Primero: tipos base
type MenuOption = string;

type MenuItem = {
  category: string;
  options: MenuOption[];
  color: string;
};

type Subcategory = {
  title: string;
  items: MenuItem[];
};

type MenuCategory = {
  title: string;
  subtitle: string;
  icon: any; // puedes reemplazar 'any' por el tipo real de tus iconos (ReactNode, SVG, componente...)
  color: string;
  subcategories: Record<string, Subcategory>;
};

        // 2️⃣ Tipo principal para el objeto completo
type MenuCategories = Record<string, MenuCategory>;




  const menuCategories: MenuCategories = {
    arepera: {
      title: "Arepera Móvil",
      subtitle: "Tradición venezolana sobre ruedas",
      icon: Truck,
      color: "from-[#b69d8f] to-[#b69d8f]",
      subcategories: {
        arepas: {
          title: "Tipos de Arepas",
          items: [
            {
              category: "Arepas Originales",
              options: ["Blanca", "Amarilla"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Arepas Especiales",
              options: ["Afrecho de Trigo c/Avena", "Chía", "Remolacha", "Zanahoria", "Verde"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        rellenos: {
          title: "Rellenos",
          items: [
            {
              category: "Proteínas, Lácteos y Otros",
              options: [
                "Carne Mechada",
                "Pollo Mechado",
                "Atún",
                "Ensalada de Atún",
                "Cazón",
                "Puerco Guisado",
                "Chicharrón",
                "Vegetales Rostizados con Garbanzos",
                "Salchicha Guisada",
                "Frijoles Negros",
                "Tajadas",
                "Perico Criollo (Huevos Revueltos)",
                "Jamón de Pierna Cocido",
                "Jamón de Pierna Ahumado",
                "Jamón de Pavo Cocido",
                "Jamón de Pavo Ahumado",
                "Queso Blanco",
                "Queso de Mano",
                "Queso Amarillo",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Especiales",
              options: [
                "Reina Pepiada",
                "Huevos de Codorniz con Salsa Rosada",
                "Mixto de Mariscos a la Vinagreta",
                "Asado Negro",
                "Pernil Horneado a la Cerveza",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Vegetales",
              options: ["Tomate", "Cebolla", "Lechuga Green Leaf", "Aguacate"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        salsas: {
          title: "Salsas de la Casa",
          items: [
            {
              category: "Salsas Especiales",
              options: [
                "Salsa de Ajo",
                "Salsa Tártara",
                "Salsa de Maíz",
                "Salsa Rosada de Ajo",
                "Pico de Gallo",
                "Guasacaca",
                "Picante Criollo",
                "Picante en Leche",
                "Suero Especial Picante",
                "Salsa Rosada Picante",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
      },
    },
    catering: {
      title: "Catering Gourmet",
      subtitle: "Elegancia en cada bocado",
      icon: Heart,
      color: "from-[#b69d8f] to-[#b69d8f]",
      subcategories: {
        aperitivos: {
          title: "Aperitivos",
          items: [
            {
              category: "Mini Empanadas Surtidas",
              options: ["Carne", "Pollo", "Jamón con Queso Crema", "Queso Blanco", "Frijoles Negros"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Tequeños y Mini Emparedados (Pan de Colores)",
              options: [
                "Tequeños de Queso con su Salsa",
                "Pollo con Hongos",
                "Jamón y Queso",
                "Tuna con Queso Crema",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mini Wraps Variados",
              options: ["Jamón y Queso", "Vegetales Salteados", "Tuna al Curry"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Canapés Variados y Pinchitos: ",
              options: [
                "Pollo en Salsa Honey Mustard",
                "Filete de Res en Salsa de Hongos",
                "Vegetales",
                "Ojos de Buey (Bacon con Ciruela Pasa)",
                "Queso y Tomates Cherry",
                "Jamon y Queso"
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        sliders: {
          title: "Sliders y Mini Opciones",
          items: [
            {
              category: "Sliders",
              options: ["Queso Crema y Bacon", "Jamón y Queso", "Pavo Ahumado"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mini Pan Pita",
              options: ["Ensalada de Pollo", "Tuna al Curry", "Ensalada de Tuna", "Dip Salmón Ahumado"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mini Hamburguesas",
              options: ["Carne y Salsa Bourbon", "Pollo Crispy y Mayonesa de Ajo"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mini Croissants",
              options: ["Jamón y Queso", "Salami y Queso Crema", "Bacon Caramelizado y Queso Suizo"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        especiales: {
          title: "Especialidades",
          items: [
            {
              category: "Mini Crepes",
              options: [
                "Salmón Ahumado y Queso Crema",
                "Fresas Caramelizadas y Queso Crema",
                "Nutella y Azúcar Pulverizada",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mini Tortillas de Huevo",
              options: [
                "Vegetariana",
                "Española Con Chorizo, Pimientos Rojos y Aceitunas",
                
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            
            {
              category: "Croquetas",
              options: ["Pollo al Romero", "Bacalao al Ají Chombo"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Huevo de Codorniz",
              options: ["Mayoneza Verde Trufada", "Salsa Rosada de Ajo"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Frutas",
              options: [
                "Mini Pinchos de Frutas Mixtas",
                "Mini Pinchos de Sandía con Queso Feta",
                "Mini Ensalada de Frutas Mixtas",
                "Mini Parfait de Fresas con Yogurt Griego y Salsa Roja",
                "Mini Parfait de Frutos Rojos",
                "Bandeja de Frutas (6 Personas)",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
             {
              category: "Varios",
              options: [
                "Rollos de Canela ",
                "Rollos de Jamon y Queso ",
                "Rollos de Pizza",
                "Rollos de Pasas",
                "Bridor Triple Chocolate",
                "Mini Cetas con Frutas",
                "Mix de Canela, Cranberries , Chocolate"
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
      },
    },
    postres: {
      title: "Postres Artesanales",
      subtitle: "Dulces momentos",
      icon: Cookie,
      color: "from-[#b69d8f] to-[#b69d8f]",
      subcategories: {
        tradicionales: {
          title: "Postres Tradicionales",
          items: [
            {
              category: "Mini Flanes y Cakes",
              options: [
                "Mini Flan Original",
                "Mini Flan de Coco",
                "Mini Chocoflan",
                "Mini Cake de Guineo",
                "Mini Cake de Zanahoria",
                "Mini Cake de Chocolate",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Cupcakes y Brownies",
              options: [
                "Cupcake de Guineo",
                "Cupcake de Zanahoria",
                "Cupcake de Chocolate",
                "Mini Brownie de Chocolate",
                "Mini 3 Leches de Ron",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mousses",
              options: [
                "Mini Mousse de Fresas",
                "Mini Mousse de Chocolate",
                "Mini Mousse de Oreo",
                "Mini Mousse de Maracuyá",
                "Mini Mousse de Mango",
                "Mini Mousse de Limón",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Forest, Dulces y Tartaletas",
              options: [
                "Mini Fresas Forest",
                "Mini Black Forest",
                "Mini Cake Vainilla",
                "Mini Tartaletas de Frutillos del Bosque",
                "Mini Tartaletas de Fresas",
                "Mini Tartaletas de Dulce de leche",
                "Mini Papayas en Almibar",
                "Mini Dulce de Leche Cortada"
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        especiales: {
          title: "Dulces Saludables",
          items: [
            {
              category: "Mini Postres (Keto/Gluten Free/Sugar Free/Dairy Free)",
              options: [
                "Mini Donuts Glaseados (Chocolate, Ferrero, Arequipe)",
                "Mini Alfajores",
                "Mini Galletas",
                "Mini Brownies",
                
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mini Shots (Keto/Gluten Free/Sugar Free/Dairy Free)",
              options: [
                "Cuatro Leches",
                "Marquesa de Chocolate",
                "Tiramisú",
                "Vainilla Chocolate",
                "Vainilla Nutella",
                "Vainilla Ferrero ",
                "Chocolate Arequipe",
                "Chocolate con Chocolate",
                "Pie de Limón",
                "Carrot Cake",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Mini Shots Vegan (Gluten Free/Sugar Free/Dairy Free/Sin Huevo)",
              options: [
                "Pie de Limón",
                "Chocolate con Chocolate",
                "Choco Arequipe",
                "Pudín de Chía y Fruta",
                "Trufas",
                "Mini Galletas",
                "Brownie de Camote Regular",
                "Gelatina de Mnago Shots",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
           regulares: {
          title: "Dulces Saludable Tamaño Regular",
          items: [
            {
              category: "Donuts Vainilla (Gluten Free/Sugar Free/Dairy Free)",
              options: [
                "🍫 Glaseado de Chocolate",
                "🍯 Glaseado de Arequipe",
                "🥥 Glaseado de Coco",
                "🌰 Glaseado de Ferrero",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
              
            },
            {
              category: "Galletas Artesanales",
              options: ["🍫 Choco Chips", "🧈 Mantequilla Ghee", "🍫 Chocolate Puro"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
         
            },
            {
              category: "Alfajores de Almendra",
              options: ["🍯 Relleno de Arequipe Tradicional", "🍫 Relleno de Arequipe Fudge"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
             
            },
            {
              category: "Porción Loaf Cake",
              options: [
                "🍰 Vainilla Clásica",
                "🍫 Chocolate Intenso",
                "🥕 Zanahoria con Especias",
                "🎂 Otros Sabores Especiales",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
             
            },
            {
              category: "Brownie Premium",
              options: ["🍫 Brownie Clásico de Chocolate", "🌰 Brownie con Nueces", "🍓 Brownie con Frutos Rojos"],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
              
            },
          ],
        },
        
      },
    },

    compartir:{
      title: "Para Compartir",
      subtitle:"Disfruta de las Mejores Bandejas",
      icon: HandPlatter,
      color:"from-[#b69d8f] to-[#b69d8f]",
      subcategories:{
        bandejas:{
          title:"Para compartir",
          items:[
            {
              category:"Bandejas",
              options:[
                "BANDEJA DE QUESOS",
                "BANDEJA DE FIAMBRES IMPORTADOS",
                "BANDEJA DE QUESOS Y FIAMBRES",
                "BANDEJA DE CRUDITE DE VEGETALES CON ADEREZO RANCH",
                "BANDEJA DE CARPACCIO DE SALMON AHUMADO ",
                "BANDEJA DE ROASTBEEF CON SASA BOURBON",


              ],
             color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 

            },
             {
              category:"Dips",
              options:[
                "DIP DE QUESO CON FRUTOS SECOS",
                "DIP DE FRIJOLES NEGROS CON PICO DE GALLO Y TORTILLAS DE MAIZ MORADA",
                "	DIP DE QUESO CON JALEA DE PIMIENTOS CARAMELIZADOS",
              ],
             color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 

            },
            {
              category:"Extras",
              options:[
                "BOLA DE QUESO BRIE CON MIEL Y ALMENDRAS",
                "MOUSSE DE ATUN ",
                
              ],
             color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 

            },
          ],
        },
      },
    },

    bebidas:{
      title:"Bebidas y Otros",
      subtitle:"Refresca cada momento",
      icon: Coffee,
      color:"from-[#b69d8f] to-[#b69d8f]",
      subcategories:{
        estaciones:{
          title:"Bebidas y Otros",
          items:[
            {
              category: "Estaciones",
              options:[
                "Cafe ",
                "Té",
              ],
              color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 
            },
            {
              category: "Jugos Variados (Dispensadores)",
              options:[
                "Naranja",
                "Naranja con Zanahoria", 
                "Piña", 
                "Melón", 
                "Papaya",
                "Ponche de Frutas", 
                "Limon con Raspadura",
              ],
              color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 
            },
            {
              category: "Aguas Saborizadas (Dispensadores)",
              options:[
                "Naranja Importada",
                "Limon Amarillo", 
                "Piña", 
                "Sandia", 
                "Limon con hierbabuena",
              ],
              color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 
            },
             {
              category: "Aguas Embotelladas",
              options:[
                "Sin Gas",
                "Con gas ", 
              ],
              color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 
            },
             {
              category: "Sodas Surtidas",
              options:[
                "Embotelladas",
                "Latas", 
              ],
              color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 
            },
            {
              category: "Bolsa de Hielo",
              options:[
               
              ],
              color:"bg-[#f8d2c6]/40 border-[#f8d2c6]", 
            },
          ],
        },
      },
    },
    
    emparedados: {
      title: "Emparedados & Wraps",
      subtitle: "Sabores envueltos",
      icon: Sandwich,
      color: "from-[#b69d8f] to-[#b69d8f]",
      subcategories: {
        emparedados: {
          title: "Emparedados",
          items: [
            {
              category: "Pan Baguette/Multigrano/Ciabatta",
              options: [
                "Huevo, Lechuga, Tomates y Queso Amarillo",
                "Jamón Cocido, Queso Suizo, Lechuga y Tomate",
                "Jamón de Pavo Ahumado, Queso Provolone, Lechuga y Tomate",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Croissant",
              options: [
                "Jamón Cocido, Queso Amarillo Cremoso, Lechuga y Tomate",
                "Ensalada de Pollo, Lechuga Green Leaf",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Wraps",
              options: [
                "Tortilla Española, Lechuga y Tomate",
                "Dip de Bacon Caramelizado con Queso Crema, Lechuga green leaf y tomate ",
                "Vegetales a la Plancha con Vinagre Balsámico, Lechuga green leaf y tomate",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
      },
    },
    asiatico: {
      title: "Cocina Asiática",
      subtitle: "Sabores del oriente",
      icon: Globe,
      color: "from-[#b69d8f] to-[#b69d8f]",
      subcategories: {
        dim_sum: {
          title: "Dim Sum",
          items: [
            {
              category: "Especialidades Asiáticas",
              options: [
                "Siu Mai",
                "Ham Pao de Puerco",
                "Ham Pao Dulce (Crema, Limón, Poroto)",
                "Ham Pao de Puerco con Vegetales",
                "Ham Pao Simple",
                "Yee Chi Kao",
                "Wotip",
                "Hakao",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
      },
    },
    buffet: {
      title: "Buffet Completo",
      subtitle: "Experiencia gastronómica total",
      icon: Utensils,
      color: "from-[#b69d8f] to-[#b69d8f]",
      subcategories: {
        ensaladas: {
          title: "Ensaladas",
          items: [
            {
              category: "Ensaladas Variadas",
              options: [
                "Ensalada de Papas",
                "Ensalada de Coditos",
                "Ensalada Mixta",
                "Ensalada César",
                "Ensalada de Coditos con Tuna",
                "Ensalada Coleslaw",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        arroz: {
          title: "Arroces",
          items: [
            {
              category: "Variedades de Arroz",
              options: [
                "Arroz Blanco",
                "Arroz Amarillo con Vegetales",
                "Arroz Verde",
                "Arroz con Almendras",
                "Arroz con Frijoles Negros y Coco",
                "Arroz con Hongos",
                "Arroz con Pollo",
                "Arroz de Combinación",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        proteinas: {
          title: "Proteínas",
          items: [
            {
              category: "Pollo",
              options: [
                "Pollo Horneado en Salsa BBQ",
                "Pollo Horneado a la Cerveza",
                "Pollo en Salsa Agridulce",
                "Pollo al Curry",
                "Pollo Guisado a la Jardinera",
                "Filete de Pollo con Vegetales",
                "Filete de Pollo a la Reina",
                "Filete de Pollo en Salsa de Hongos",
                "Filete de Pollo a la Naranja"


              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Res",
              options: [
                "Carne Guisada con Papas",
                "Carne Molida a la Napolitana",
                "Bisteck Picado con Vegetales",
                "Lomo de Res al Vino",
                "Filete de Res con Chimichurri",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Cerdo",
              options: [
                "Chuleta de Cerdo con Vegetales",
                "Chuleta Ahumada en Salsa de Guayaba",
                "Chuleta Ahumada con Pimientos Caramelizados",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
            {
              category: "Pescado",
              options: [
                "Salmón en Salsa Tzatziki",
                "Salmón con Salsa de Miel y Mostaza",
                "Filete de Corvina en Salsa de Alcaparras",
                "Filete de Corvina con Ajos Rostizados",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
        acompañamientos: {
          title: "Acompañamientos",
          items: [
            {
              category: "Acompañamientos Especiales",
              options: [
                "Plátano en Tentación",
                "Plátano en Tentación al Ron",
                "Plátano en Salsa Roja",
                "Puré de Papas con Ajos Rostizados",
                "Tajadas",
                "Spaghettis al Oleo",
                "Farfalle en Salsa Rosada",
                "Yuca al Mojo",
                "Papines al Ajillo",
                "Papines en Salsa de Trufas",
                "Zucchini Salteado en Mantequilla de Ajo",
                "Patacones de Plátano Maduro en Salsa de Guayaba",
                "Patacones de Yuca",
                "Vegetales al Vapor",
                "Quinoa con Vegetales Rostizados",
              ],
              color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
            },
          ],
        },
      },
    },
    LunchBox:{
        title:"LunchBox",
        subtitle: "Comidas Completas Empacadas",
        icon: Package,
        color: "from-[#b69d8f] to-[#b69d8f]",
        subcategories: {
            menus:{
                title:"Menus Empacados",
                items:[
                    {
                        category: "Menu #1 - Completo",
                          options: [
                                "Arroz",
                                "Acompañamiento",
                                "Ensalada",
                                "Postre o Fruta",
                                "Soda de Lata o Agua Embotellada",
                                "Proteína a elegir: Pollo (Presa), Pollo (Filete), Carne Res, Puerco, Pescado (Filete Corvina o Salmón)",
                            ],
                            color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
                            
                    },
                      {
                        category: "Menu #2 - Estandar",
                          options: [
                                "Arroz",
                                "Ensalada o Acompañamiento",
                                "Postre o Fruta",
                                "Soda de Lata o Agua Embotellada",
                                "Proteína a elegir: Pollo (Presa), Pollo (Filete), Carne Res, Puerco, Pescado (Filete Corvina o Salmón)",
                            ],
                            color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
                            
                    },
                     {
                        category: "Menu #3 - Basico",
                          options: [
                                "Arroz",
                                "Ensalada o Acompañamiento",
                                "Soda de Lata o Agua Embotellada",
                                "Proteína a elegir: Pollo (Presa), Pollo (Filete), Carne Res, Puerco, Pescado (Filete Corvina o Salmón)",
                            ],
                            color: "bg-[#f8d2c6]/40 border-[#f8d2c6]",
                            
                    },
                ]
            }

        }


    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8d2c6]/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4 lg:text-5xl">
            Nuestro <span className="text-[#b69d8f]">Menú Completo</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#b69d8f] to-transparent mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Más de 200 opciones gastronómicas para hacer de tu evento una experiencia inolvidable. Desde nuestra
            tradicional arepera móvil hasta buffets completos y postres artesanales.
          </p>
        </div>




        
        {/* Main Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(menuCategories).map(([key, category]) => {
            const IconComponent = category.icon
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key)
                  setActiveSubCategory(Object.keys(category.subcategories)[0])
                }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-serif text-lg transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[#b69d8f] text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-[#b69d8f]/10 hover:text-[#b69d8f] shadow-md"
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Category Content */}
        <div className="transition-all duration-500 ease-in-out">
          {Object.entries(menuCategories).map(([key, category]) => {
            if (key !== activeCategory) return null

            const IconComponent = category.icon

            return (
              <div key={key} className="animate-fade-in">
                {/* Category Header */}
                <div className={`text-center mb-12 p-8 rounded-2xl bg-gradient-to-r ${category.color} text-white`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-2 ">{category.title}</h3>
                  <p className="text-xl opacity-90">{category.subtitle}</p>
                </div>

                {/* Subcategory Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                    <button
                      key={subKey}
                      onClick={() => setActiveSubCategory(subKey)}
                      className={`px-4 py-2 rounded-full font-serif transition-all duration-300 ${
                        activeSubCategory === subKey
                          ? "bg-gray-800 text-white shadow-md"
                          : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                      }`}
                    >
                      {subcategory.title}
                    </button>
                  ))}
                </div>

                {/* Subcategory Content */}
                {Object.entries(category.subcategories).map(([subKey, subcategory]) => {
                  if (subKey !== activeSubCategory) return null

                  return (
                    <div key={subKey} className="grid gap-6">
                      {subcategory.items.map((item, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-xl border-2 ${item.color} transition-all duration-300 hover:shadow-lg`}
                        >
                          <h4 className="font-serif text-xl font-semibold text-gray-800 mb-4">{item.category}</h4>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {item.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                              >
                                <span className="text-gray-700 text-sm">{option}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })}

                {/* Special Arepa Menu Display */}
                {activeCategory === "arepera" && (
                  <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center mb-8">
                      <h4 className="font-serif text-2xl font-bold text-gray-800 mt-6 mb-4">
                        ¡Más de 50 combinaciones posibles!
                      </h4>
                      <p className="text-gray-600">
                        Combina cualquier tipo de arepa con tus rellenos favoritos y nuestras salsas especiales
                      </p>
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                    <h4 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                      ¿Necesitas algo específico?
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Podemos personalizar cualquier opción o crear menús completamente únicos para tu evento.
                      ¡Cuéntanos tu visión!
                    </p>
                    <button
                    onClick={() => {
                      const section = document.getElementById('formulario');
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-[#b69d8f]/60 to-[#b69d8f]/80 text-white px-8 py-3 rounded-full font-serif text-lg hover:from-[#b69d8f]/80 hover:to-[#b69d8f]/120 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Solicitar cotización personalizada
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#b69d8f] mb-2">200+</div>
            <div className="text-gray-600">Opciones de menú</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#b69d8f] mb-2">50+</div>
            <div className="text-gray-600">Combinaciones de arepas</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#b69d8f] mb-2">20+</div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#b69d8f] mb-2">100%</div>
            <div className="text-gray-600">Satisfacción garantizada</div>
          </div>
        </div>
      </div>
    </section>
  )
}
