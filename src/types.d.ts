export interface Root {
  Tools: Tool[]
}

export interface Tool {
  frontend?: Frontend
  Backend?: Backend
  Learning?: Learning
  "API's"?: ApiS
  Hosting?: Hosting
  Monitoring?: Monitoring
  AI?: Ai
}

export interface Frontend {
  section_name: string
  ui_components: UiComponents
  fake_data: FakeData
  graphic_resources: GraphicResources
  Playgrounds: Playground[]
  Testing: Testing
  "Herramientas de diseño y prototipado": HerramientasDeDiseoYPrototipado
  "Herramientas de accesibilidad": HerramientasDeAccesibilidad[]
}

export interface UiComponents {
  subsection_name: string
  component_libraries: ComponentLibrary[]
  tools_for_create_components: ToolsForCreateComponent[]
}

export interface ComponentLibrary {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ToolsForCreateComponent {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface FakeData {
  fake_data_generators: FakeDataGenerator[]
}

export interface FakeDataGenerator {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface GraphicResources {
  "SVG Resources": Resource[]
  "Stock Images": Image[]
  "Image Optimization": ImageOptimization[]
}

export interface Resource {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Image {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ImageOptimization {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Playground {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Testing {
  "Frameworks de testing": FrameworksDeTesting[]
  "Pruebas de integración": PruebasDeIntegracin[]
}

export interface FrameworksDeTesting {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface PruebasDeIntegracin {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface HerramientasDeDiseoYPrototipado {
  Diseño: Diseo[]
  Prototipado: Prototipado[]
}

export interface Diseo {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Prototipado {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface HerramientasDeAccesibilidad {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Backend {
  section_name: string
  "Frameworks & librerías": FrameworksLibreras
  Databases: Databases
  Autenticación: Autenticacin
  Testing: Testing2
  "Contenedores y orquestación": ContenedoresYOrquestacin
  "Maquinas virtuales": Virtuale[]
  "CI/CD": CiCd
  Security: Security
  "API's y microservicios": ApiSYMicroservicios
}

// export interface FrameworksLibreras {
//   JavaScript: string[]
//   Python: string[]
//   PHP: string[]
//   Java: string[]
//   Ruby: string[]
// }

export interface Databases {
  RDBMS: Rdbms[]
  "No SQL": NoSql[]
  ORM: Orm[]
}

export interface Rdbms {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface NoSql {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Orm {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Autenticacin {
  OAuth: Oauth[]
}

export interface Oauth {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Testing2 {
  Frameworks: Framework[]
  Integración: Integracin[]
  Performance: Performance[]
}

export interface Framework {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Integracin {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Performance {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ContenedoresYOrquestacin {
  Contenedores: Contenedore[]
  Orquestación: Orquestacin[]
}

export interface Contenedore {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Orquestacin {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Virtuale {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface CiCd {
  CI: Ci[]
  CD: Cd[]
}

export interface Ci {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Cd {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Security {
  "Vulnerability Scanner": VulnerabilityScanner[]
  "Dependencies security": DependenciesSecurity[]
  "SSL Certificate": SslCertificate[]
}

export interface VulnerabilityScanner {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface DependenciesSecurity {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface SslCertificate {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ApiSYMicroservicios {
  "Pruebas de API's": GeneratedType[]
  "API Gateway": ApiGateway[]
}

export interface GeneratedType {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ApiGateway {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Learning {
  "Cursos online": CursosOnline
  "Plataformas interactivas": PlataformasInteractivas
  "Documentaciones y referencias": DocumentacionesYReferencias
  "Comunidades y foros": ComunidadesYForos
  "Tutoriales y blogs": TutorialesYBlogs
  "Videos y tutoriales en YT": VideosYTutorialesEnYt
  Certificaciones: Certificaciones
}

export interface CursosOnline {
  // Generales: string[]
  // Especializaciones: string[]
}

export interface PlataformasInteractivas {
  // "Codificación Interactiva": string[]
  // "Desafíos de programación": string[]
}

export interface DocumentacionesYReferencias {
  // "Documentación oficial": string[]
  // Libros: string[]
}

export interface ComunidadesYForos {
  // Comunidades: string[]
  // Foros: string[]
}

export interface TutorialesYBlogs {
  // "Webs de tutoriales": string[]
  // "Blogs y artículos": string[]
}

export interface VideosYTutorialesEnYt {}

export interface Certificaciones {
  // Tecnologías: string[]
  // Generales: string[]
}

export interface ApiS {
  "Pasarelas de pago": PasarelasDePago
  "Market data": MarketData
  "Reservations and trips": ReservationsAndTrips
  "Social media": SocialMedia
  Communication: Communication
  Meteorology: Meteorology
  "Geography & maps": GeographyMaps
  eCommerce: ECommerce
  "Storage and File Management": StorageAndFileManagement
  Authentication: Authentication
}

export interface PasarelasDePago {
  "APIs de pago": ApisDePago[]
}

export interface ApisDePago {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface MarketData {
  "Market data": Daum[]
}

export interface Daum {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ReservationsAndTrips {
  "Flight booking": FlightBooking[]
  "Hotel booking": HotelBooking[]
  "Transport APIs": Api[]
}

export interface FlightBooking {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface HotelBooking {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Api {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface SocialMedia {
  "Social media": Medum[]
}

export interface Medum {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Communication {
  Messaging: Messaging[]
  "Video conference": VideoConference[]
}

export interface Messaging {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface VideoConference {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Meteorology {
  Meteorology: Meteorology2[]
}

export interface Meteorology2 {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface GeographyMaps {
  "Maps & geolocation": MapsGeolocation[]
}

export interface MapsGeolocation {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ECommerce {
  eCommerce: ECommerce2[]
}

export interface ECommerce2 {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface StorageAndFileManagement {
  "Cloud storage": CloudStorage[]
}

export interface CloudStorage {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Authentication {
  Auth: Auth[]
}

export interface Auth {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Hosting {
  "Shared hosting": SharedHosting[]
  VPS: Vps[]
  "Dedicated Server": DedicatedServer[]
  "Cloud Hosting": CloudHosting[]
  "Managed WordPress Hosting": ManagedWordPressHosting[]
  "App Hosting": AppHosting[]
  "Hosting de eCommerce": HostingDeECommerce[]
  "Free Hosting": FreeHosting[]
  "Resellers Hosting": ResellersHosting[]
  "Hosting de Imágenes y Archivos": Archivo[]
}

export interface SharedHosting {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Vps {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface DedicatedServer {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface CloudHosting {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ManagedWordPressHosting {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface AppHosting {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface HostingDeECommerce {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface FreeHosting {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ResellersHosting {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Archivo {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Monitoring {
  Infrastructure: Infrastructure
  Apps: Apps
  Logging: Logging
  Performance: Performance2
  "Cloud monitoring": CloudMonitoring
  "Containers & orquestadores": ContainersOrquestadores
  Security: Security2
  "Services & endpoints": ServicesEndpoints
}

export interface Infrastructure {
  "Server & System": ServerSystem[]
  Networks: Network[]
}

export interface ServerSystem {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Network {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Apps {
  "AMP (Application Performance Monitoring)": AmpApplicationPerformanceMonitoring[]
}

export interface AmpApplicationPerformanceMonitoring {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Logging {
  "Log Management and Analysis": Analysi[]
}

export interface Analysi {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Performance2 {
  "Frontend performance": FrontendPerformance[]
  Load: Load[]
}

export interface FrontendPerformance {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Load {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface CloudMonitoring {
  "Cloud services": Service[]
}

export interface Service {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ContainersOrquestadores {
  Contenedores: Contenedore2[]
  Orquestadores: Orquestadore[]
}

export interface Contenedore2 {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Orquestadore {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Security2 {
  "Detection & response": DetectionResponse[]
}

export interface DetectionResponse {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ServicesEndpoints {
  "Availability and Uptime": AvailabilityAndUptime[]
}

export interface AvailabilityAndUptime {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Ai {
  "Content generation": ContentGeneration
  "Programming assistant": ProgrammingAssistant
  "Website analysis": WebsiteAnalysis
  "Automated design and prototyping": AutomatedDesignAndPrototyping
  "Code generation and optimization": CodeGenerationAndOptimization
  "Chatbots & virtual assistants": ChatbotsVirtualAssistants
  "Translation & localization": TranslationLocalization
  "Image & video optimization": ImageVideoOptimization
  "Detection & recognition": DetectionRecognition
}

export interface ContentGeneration {
  "Text generation": TextGeneration[]
  "Image generation": ImageGeneration[]
}

export interface TextGeneration {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ImageGeneration {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ProgrammingAssistant {
  "Codding assistant": CoddingAssistant[]
  "Code reviewer": CodeReviewer[]
}

export interface CoddingAssistant {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface CodeReviewer {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface WebsiteAnalysis {
  "SEO analysis": Analysis[]
  "Performance optimization": PerformanceOptimization[]
  "User analysis": Analysis2[]
}

export interface Analysis {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface PerformanceOptimization {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Analysis2 {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface AutomatedDesignAndPrototyping {
  "Graphic design": GraphicDesign[]
  "Design UI/UX": DesignUiUx[]
}

export interface GraphicDesign {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface DesignUiUx {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface CodeGenerationAndOptimization {
  "Code generators": Generator[]
  "Code optimization": CodeOptimization[]
}

export interface Generator {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface CodeOptimization {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ChatbotsVirtualAssistants {
  Chatbots: Chatbot[]
  "Virtual assistants": Assistant[]
}

export interface Chatbot {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Assistant {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface TranslationLocalization {
  "Automated translation": AutomatedTranslation[]
  Localization: Localization[]
}

export interface AutomatedTranslation {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface Localization {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface ImageVideoOptimization {
  "Image compression & optimization": ImageCompressionOptimization[]
  "Video optimization": VideoOptimization[]
}

export interface ImageCompressionOptimization {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface VideoOptimization {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface DetectionRecognition {
  "Image & video recognition": ImageVideoRecognition[]
  "Voice recognition": VoiceRecognition[]
}

export interface ImageVideoRecognition {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}

export interface VoiceRecognition {
  name: string
  Description: string
  Url: string
  Technologies: string[]
  Free: boolean
}
