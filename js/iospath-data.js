const IOSPATH_DATA = {
  topics: [
    {
      id: "orientation-xcode",
      title: "1. iOS Ekosistemi ve Xcode Kurulumu",
      area: "Foundation",
      level: "Başlangıç",
      duration: "1 hafta",
      focus: "Apple platformlarını, Xcode'u ve proje teslim mantığını tanıma",
      source: "Apple Develop in Swift, Apple SwiftUI Pathway",
      videoTitle: "Apple Developer Videos - Developer Tools / Xcode",
      videoUrl: "https://developer.apple.com/videos/developer-tools",
      evidence: "Kurulmuş Xcode, çalışan ilk SwiftUI ekranı ve öğrenme günlüğü README dosyası",
      description: "iOS geliştirmenin hangi araçlarla, hangi platformlarda ve hangi çıktı mantığıyla yapıldığı öğrenilir.",
      lesson: "Bu aşamada amaç doğrudan karmaşık kod yazmak değil; Xcode, Swift, SwiftUI, simulator, preview, GitHub ve portfolyo kavramlarını aynı çerçevede anlamaktır. Profesyonel bir rota, ilk günden düzenli klasör yapısı ve not tutma alışkanlığıyla başlamalıdır.",
      outcomes: [
        "Xcode, Swift, SwiftUI ve simulator görevlerini ayırt eder.",
        "Yeni bir SwiftUI projesi oluşturup çalıştırır.",
        "Proje klasörü, README ve ekran görüntüsü düzenini kurar.",
        "Öğrenme sürecini portfolyo mantığıyla takip etmeye başlar."
      ],
      exampleCode: "let platform = \"iOS\"\nlet tool = \"Xcode\"\nlet firstGoal = \"Run my first SwiftUI app\"\nprint(\"\\(platform) + \\(tool): \\(firstGoal)\")",
      checklist: [
        "Mac üzerinde Xcode ve simulator çalışma ortamını kontrol et.",
        "Yeni SwiftUI projesi oluşturup preview ve simulator üzerinde çalıştır.",
        "GitHub veya yerel klasörde iOSPath-learning-log yapısını hazırla.",
        "İlk README dosyasına hedef, kaynak ve haftalık planını yaz."
      ],
      project: "İlk çalışan SwiftUI başlangıç ekranı",
      dependency: null,
      modules: [
        {
          title: "Araçları Tanıma",
          content: "Xcode geliştirme ortamı, Swift programlama dili, SwiftUI arayüz framework'ü, simulator ise test ortamıdır.",
          note: "Bu kavramları karıştırmamak sonraki modüllerde öğrenmeyi ciddi şekilde kolaylaştırır.",
          practice: "Xcode'da yeni proje aç ve ContentView dosyasını bul.",
          question: "Xcode, Swift ve SwiftUI arasındaki fark nedir?"
        },
        {
          title: "İlk Çalıştırma",
          content: "Bir projenin gerçekten başladığını görmek için simulator, preview ve console çıktısı kontrol edilir.",
          note: "Başlangıçta amaç kusursuz uygulama değil, geliştirme döngüsünü anlamaktır.",
          practice: "Ekrandaki metni değiştir, preview'i yenile ve simulator üzerinde çalıştır.",
          question: "Preview ile simulator arasında ne fark vardır?"
        },
        {
          title: "Öğrenme Günlüğü",
          content: "Her modülde yapılan işlerin kısa not, ekran görüntüsü ve commit olarak saklanması portfolyo değerini artırır.",
          note: "İyi portfolyo sadece final projeyi değil, gelişim sürecini de gösterir.",
          practice: "README içine ilk ekran görüntünü ve öğrendiğin 3 kavramı ekle.",
          question: "Bir öğrenme günlüğü iş görüşmesinde neden faydalıdır?"
        }
      ]
    },
    {
      id: "product-discovery",
      title: "2. App Design ve Problem Keşfi",
      area: "Product",
      level: "Başlangıç",
      duration: "1 hafta",
      focus: "Kullanıcı problemi, MVP kapsamı ve ekran akışı çıkarma",
      source: "Apple Develop in Swift App Design, Human Interface Guidelines",
      videoTitle: "Apple Developer Videos - Design",
      videoUrl: "https://developer.apple.com/videos/design/",
      evidence: "Problem tanımı, persona, MVP listesi ve basit wireframe dokümanı",
      description: "Kod yazmadan önce uygulamanın hangi problemi çözdüğü, kimin için geliştirildiği ve ilk sürümde nelerin yer alacağı belirlenir.",
      lesson: "Profesyonel iOS geliştirme yalnızca ekrana buton koymak değildir. Ürün fikri, hedef kullanıcı, temel senaryo, MVP kapsamı ve tasarım akışı net değilse proje büyüdükçe dağılır. Bu modül, yazılımı kullanıcı ihtiyacıyla bağlar.",
      outcomes: [
        "Kullanıcı problemini teknik özellikten ayırır.",
        "Hedef kullanıcı ve kullanım senaryosu yazar.",
        "MVP ve sonraki sürüm özelliklerini ayırır.",
        "Ekran akışını basit wireframe ile anlatır."
      ],
      exampleCode: "struct AppIdea {\n    let problem: String\n    let targetUser: String\n    let mainFeature: String\n}",
      checklist: [
        "Uygulama fikrini bir kullanıcı problemi olarak yaz.",
        "Bir persona ve en az iki kullanım senaryosu hazırla.",
        "MVP için en önemli 5 özelliği seç.",
        "Ana ekran, detay ekranı ve form ekranı için wireframe çiz."
      ],
      project: "Uygulama fikri ve MVP tasarım dokümanı",
      dependency: "orientation-xcode",
      modules: [
        {
          title: "Problem Tanımı",
          content: "Problem, kullanıcının yaşadığı gerçek zorluktur; 'liste ekranı olacak' gibi teknik anlatımlar problem değildir.",
          note: "İyi problem tanımı, uygulamanın neden var olduğunu açıklar.",
          practice: "Fikrini 'Kullanıcı ... yapmakta zorlanıyor' cümlesiyle yaz.",
          question: "Uygulaman hangi kullanıcı problemini çözüyor?"
        },
        {
          title: "MVP Kapsamı",
          content: "MVP, ilk çalışan sürümde gerçekten gerekli olan en küçük özellik setidir.",
          note: "Kapsamı küçük tutmak projeyi bitirme ihtimalini artırır.",
          practice: "Özellikleri olmazsa olmaz, geliştirilebilir ve ertelenebilir olarak ayır.",
          question: "İlk sürümde hangi özellikler kesin gerekli?"
        },
        {
          title: "Wireframe",
          content: "Wireframe, renk ve detaydan önce bilgi mimarisini ve ekran akışını gösterir.",
          note: "Basit çizim bile kodlamadan önce hataları fark ettirir.",
          practice: "Ana akışı kutular ve oklarla çiz.",
          question: "Kullanıcı hedefe kaç adımda ulaşıyor?"
        }
      ]
    },
    {
      id: "swift-foundations",
      title: "3. Swift Temelleri",
      area: "Swift",
      level: "Başlangıç",
      duration: "2 hafta",
      focus: "Tip güvenliği, optionals, fonksiyonlar, koleksiyonlar ve value type mantığı",
      source: "Swift.org The Swift Programming Language",
      videoTitle: "Apple Developer Videos - Swift",
      videoUrl: "https://developer.apple.com/videos/swift/",
      evidence: "Swift playground notları, küçük algoritma örnekleri ve model struct çalışması",
      description: "Swift dilinin temel yapı taşları öğrenilir ve uygulama geliştirmede kullanılacak güvenli kod yazma alışkanlığı kazanılır.",
      lesson: "Swift; tip güvenliği, optionals, value type yaklaşımı, protocol ve closure gibi özelliklerle modern iOS geliştirmenin temelidir. Bu modülde amaç yalnızca syntax ezberlemek değil, daha sonra SwiftUI ve mimaride kullanılacak dili sağlam kurmaktır.",
      outcomes: [
        "let, var, optional, guard ve if let kullanımını açıklar.",
        "Array, Set ve Dictionary ile veri tutar.",
        "Struct, enum ve function ile küçük modeller oluşturur.",
        "Closure ve protocol mantığını temel düzeyde kavrar."
      ],
      exampleCode: "struct TaskItem {\n    let title: String\n    var isDone: Bool\n\n    var statusText: String {\n        isDone ? \"Done\" : \"Waiting\"\n    }\n}",
      checklist: [
        "Optional değerleri if let ve guard let ile güvenli aç.",
        "Bir model struct ve computed property yaz.",
        "Enum ile ekran veya görev durumlarını temsil et.",
        "Koleksiyonlar üzerinde filtreleme ve sıralama denemesi yap."
      ],
      project: "Swift console task tracker modeli",
      dependency: "product-discovery",
      modules: [
        {
          title: "Tip Güvenliği ve Optional",
          content: "Swift, değişkenin tipini ve nil olma ihtimalini açık hale getirerek hataları azaltır.",
          note: "Optional konusu iyi anlaşılmadan SwiftUI form ve API işlemleri zorlaşır.",
          practice: "String? değerini if let ve guard let ile iki farklı şekilde aç.",
          question: "Optional neden doğrudan normal String gibi kullanılamaz?"
        },
        {
          title: "Value Type Mantığı",
          content: "Struct ve enum değer tipi olarak çalışır; kopyalama davranışı class'lardan farklıdır.",
          note: "SwiftUI'da model ve view yapıları çoğunlukla struct olduğu için bu ayrım önemlidir.",
          practice: "TaskItem, Priority ve TaskStatus modellerini oluştur.",
          question: "Struct ile class arasındaki temel fark nedir?"
        },
        {
          title: "Fonksiyon, Closure ve Protocol",
          content: "Fonksiyonlar davranışı ayırır, closure taşınabilir kod bloğu sağlar, protocol ortak sözleşme tanımlar.",
          note: "Bu üç kavram networking, callback, delegate ve dependency injection konularında tekrar karşına çıkar.",
          practice: "Görev listesini filtreleyen closure alan bir fonksiyon yaz.",
          question: "Protocol neden ortak davranış tanımlamak için kullanılır?"
        }
      ]
    },
    {
      id: "xcode-debugging",
      title: "4. Xcode, Debugging ve Geliştirme Akışı",
      area: "Tooling",
      level: "Başlangıç",
      duration: "1 hafta",
      focus: "Debugger, breakpoint, simulator, Git ve proje düzeni",
      source: "Xcode Documentation, Apple Developer Videos",
      videoTitle: "Run, Break, Inspect: Explore effective debugging in LLDB",
      videoUrl: "https://developer.apple.com/videos/developer-tools",
      evidence: "Breakpoint ekran görüntüsü, simulator testi ve düzenli Git commit geçmişi",
      description: "Kod yazmanın yanında projeyi çalıştırma, hata ayıklama, değişiklikleri takip etme ve Xcode araçlarını verimli kullanma öğrenilir.",
      lesson: "Profesyonel geliştirici için Xcode sadece kod yazılan yer değildir. Debugger, console, simulator, preview, breakpoints, scheme ve Git entegrasyonu günlük geliştirme sürecinin parçasıdır.",
      outcomes: [
        "Breakpoint ile değişken değerlerini inceler.",
        "Simulator üzerinde farklı cihazlarda test yapar.",
        "Console çıktısı ve hata mesajlarını yorumlar.",
        "Git commit geçmişini düzenli tutar."
      ],
      exampleCode: "let debugName = \"iOSPath\"\nprint(\"Current module: \\(debugName)\")\n// Bu satıra breakpoint ekleyip değeri incele.",
      checklist: [
        "En az iki breakpoint ile değişken değeri kontrol et.",
        "Farklı iPhone simulator seçeneklerinde ekranı test et.",
        "Küçük bir hata oluşturup console mesajını incele.",
        "Her modül sonunda anlamlı commit mesajı yaz."
      ],
      project: "Debug notları bulunan mini SwiftUI ekranı",
      dependency: "swift-foundations",
      modules: [
        {
          title: "Breakpoint Kullanımı",
          content: "Breakpoint, kod akışını durdurup değişkenleri ve çağrı sırasını incelemeyi sağlar.",
          note: "Hata ayıklama bilmeden proje geliştirmek tahmin yürütmeye dönüşür.",
          practice: "Bir buton action içinde breakpoint koy ve state değerini izle.",
          question: "Breakpoint hangi durumda print'ten daha faydalıdır?"
        },
        {
          title: "Simulator Kontrolü",
          content: "Farklı ekran boyutları, yönler ve cihazlar arayüzün dayanıklı olup olmadığını gösterir.",
          note: "Sadece tek cihazda çalışan tasarım profesyonel kabul edilmez.",
          practice: "Aynı ekranı küçük ve büyük iPhone simulator üzerinde çalıştır.",
          question: "Responsive kontrol neden erken yapılmalıdır?"
        },
        {
          title: "Git Disiplini",
          content: "Düzenli commit, projenin nasıl geliştiğini ve hangi kararların alındığını gösterir.",
          note: "Portfolyo değerlendirmesinde commit geçmişi ciddiyet göstergesi olabilir.",
          practice: "Her modül için kısa ve anlamlı commit mesajı yaz.",
          question: "İyi bir commit mesajı ne anlatmalıdır?"
        }
      ]
    },
    {
      id: "swiftui-foundations",
      title: "5. SwiftUI Temelleri ve Declarative UI",
      area: "SwiftUI",
      level: "Başlangıç",
      duration: "2 hafta",
      focus: "View, modifier, component, preview ve declarative düşünme",
      source: "Apple SwiftUI Pathway, SwiftUI Documentation",
      videoTitle: "Stanford CS193p - Developing Apps for iOS with SwiftUI",
      videoUrl: "https://cs193p.stanford.edu/about-cs193p",
      evidence: "Tekrar kullanılabilir component'lerden oluşan SwiftUI dashboard ekranı",
      description: "SwiftUI'nın deklaratif arayüz yaklaşımı, view yapısı, modifier zinciri ve component mantığı öğrenilir.",
      lesson: "SwiftUI'da geliştirici ekrana nasıl ulaşılacağını adım adım emretmek yerine, ekranda ne görünmesi gerektiğini tanımlar. Bu yaklaşım, state değiştiğinde arayüzün otomatik güncellenmesini sağlar.",
      outcomes: [
        "View ve body yapısını açıklar.",
        "Modifier zinciriyle görünüm düzenler.",
        "Custom component oluşturur.",
        "Preview üzerinden hızlı tasarım denemesi yapar."
      ],
      exampleCode: "struct InfoCard: View {\n    let title: String\n    let value: String\n\n    var body: some View {\n        VStack(alignment: .leading) {\n            Text(title).font(.caption)\n            Text(value).font(.title2.bold())\n        }\n        .padding()\n    }\n}",
      checklist: [
        "En az üç farklı custom view oluştur.",
        "Component'lere dışarıdan property gönder.",
        "Modifier zinciriyle okunabilir kart tasarımı yap.",
        "Preview ile farklı veri örneklerini test et."
      ],
      project: "Reusable dashboard card component seti",
      dependency: "xcode-debugging",
      modules: [
        {
          title: "Declarative UI",
          content: "SwiftUI, veriye göre arayüzü tanımlar. State değişince framework ekranı yeniden hesaplar.",
          note: "Bu mantık anlaşılmadan SwiftUI kodu gereksiz karmaşık hale gelir.",
          practice: "Aynı component'i farklı title ve value değerleriyle kullan.",
          question: "SwiftUI neden declarative olarak adlandırılır?"
        },
        {
          title: "Modifier Zinciri",
          content: "Modifier'lar view'ın görünümünü, davranışını ve erişilebilirliğini düzenler.",
          note: "Modifier sırası bazen sonucu etkileyebilir.",
          practice: "padding, background, clipShape, font ve foregroundStyle kullan.",
          question: "Modifier zincirinde sıra neden önemli olabilir?"
        },
        {
          title: "Preview Disiplini",
          content: "Preview, component'i farklı veri ve boyutlarda hızlı kontrol etmeyi sağlar.",
          note: "Preview sadece görsel konfor değil, hızlı kalite kontrol aracıdır.",
          practice: "Light/dark mode ve farklı örnek verilerle preview oluştur.",
          question: "Preview hangi hataları erken yakalatabilir?"
        }
      ]
    },
    {
      id: "swiftui-layout-design-system",
      title: "6. Layout, Tasarım Sistemi ve HIG",
      area: "SwiftUI",
      level: "Orta",
      duration: "2 hafta",
      focus: "Stack, grid, spacing, typography, color ve Human Interface Guidelines",
      source: "SwiftUI Documentation, Apple Human Interface Guidelines",
      videoTitle: "Apple Developer Videos - SwiftUI & UI Frameworks",
      videoUrl: "https://developer.apple.com/videos/swiftui-ui-frameworks/",
      evidence: "Tutarlı spacing, renk ve typography kullanan responsive ekran",
      description: "Arayüz yerleşimi, görsel hiyerarşi, responsive davranış ve Apple tasarım prensipleri profesyonel düzeyde ele alınır.",
      lesson: "Kullanıcı arayüzü yalnızca güzel görünmemeli; okunabilir, tutarlı ve farklı cihazlarda dayanıklı olmalıdır. SwiftUI layout araçları ile Human Interface Guidelines birlikte düşünülmelidir.",
      outcomes: [
        "VStack, HStack, ZStack, LazyVGrid ve ScrollView kullanır.",
        "Spacing ve typography kararlarını tutarlı hale getirir.",
        "Farklı ekran boyutlarında taşma kontrolü yapar.",
        "HIG ilkelerini arayüz kararlarına uygular."
      ],
      exampleCode: "LazyVGrid(columns: [GridItem(.adaptive(minimum: 160))], spacing: 16) {\n    ForEach(items) { item in\n        InfoCard(title: item.title, value: item.value)\n    }\n}",
      checklist: [
        "Bir ekranı stack ve grid yapılarıyla yeniden tasarla.",
        "Kendi spacing ve renk kararlarını küçük bir style notunda tanımla.",
        "Küçük ve büyük simulator ekranlarında taşma testi yap.",
        "HIG'e göre görsel hiyerarşi ve buton davranışlarını kontrol et."
      ],
      project: "Stil verilmiş SwiftUI dashboard ekranı",
      dependency: "swiftui-foundations",
      modules: [
        {
          title: "Layout Container'ları",
          content: "Stack, grid ve scroll yapıları ekranın ana iskeletini oluşturur.",
          note: "Layout'u doğru kurmak sonradan yapılacak her tasarım kararını kolaylaştırır.",
          practice: "Aynı içeriği hem VStack hem LazyVGrid ile düzenle.",
          question: "Uzun içerikte ScrollView ne zaman gerekir?"
        },
        {
          title: "Tasarım Sistemi",
          content: "Renk, boşluk, font ve köşe kararları tutarlı olduğunda uygulama daha profesyonel görünür.",
          note: "Her component'te rastgele değer kullanmak proje büyüdükçe tasarımı bozar.",
          practice: "Ana renk, yardımcı renk, spacing ve font kullanımını not et.",
          question: "Tasarım sisteminin küçük projeye katkısı nedir?"
        },
        {
          title: "HIG Kontrolü",
          content: "HIG; hiyerarşi, tutarlılık, okunabilirlik ve kullanıcı beklentileri için referans sağlar.",
          note: "Apple platformlarında doğal hissettiren arayüzler HIG ile daha uyumludur.",
          practice: "Buton, navigation ve boş durum ekranını HIG'e göre değerlendir.",
          question: "Görsel hiyerarşi kullanıcıya ne kazandırır?"
        }
      ]
    },
    {
      id: "state-data-flow",
      title: "7. State, Binding ve Veri Akışı",
      area: "SwiftUI",
      level: "Orta",
      duration: "2 hafta",
      focus: "@State, @Binding, Observable, Environment ve ekran durumları",
      source: "SwiftUI Documentation, Stanford CS193p",
      videoTitle: "Stanford CS193p - SwiftUI state and data flow lectures",
      videoUrl: "https://cs193p.stanford.edu/about-cs193p",
      evidence: "State yönetimi olan form ve liste ekranı",
      description: "SwiftUI uygulamalarında ekranın veriye göre nasıl güncellendiği, parent-child veri aktarımı ve durum modelleme öğrenilir.",
      lesson: "SwiftUI'nın kalbi veri akışıdır. Bir ekranın loading, empty, error ve success gibi durumları net modellenmezse kullanıcı deneyimi zayıflar ve kod karmaşıklaşır.",
      outcomes: [
        "@State ve @Binding kullanım farkını açıklar.",
        "Observable model ile birden fazla view'ı besler.",
        "Loading, empty, error ve success state tasarlar.",
        "Child component'e güvenli veri aktarır."
      ],
      exampleCode: "enum ScreenState {\n    case loading\n    case empty\n    case loaded([TaskItem])\n    case error(String)\n}",
      checklist: [
        "@State ile çalışan etkileşimli buton oluştur.",
        "@Binding ile child view'dan parent state'i değiştir.",
        "Ekran durumları için enum kullan.",
        "Boş ve hata durumlarını ayrı arayüzlerle göster."
      ],
      project: "Durum yönetimi olan görev listesi ekranı",
      dependency: "swiftui-layout-design-system",
      modules: [
        {
          title: "@State ve @Binding",
          content: "@State view'ın kendi durumunu, @Binding ise başka view'dan gelen değiştirilebilir değeri temsil eder.",
          note: "Binding'i gereksiz yaymak veri akışını takip etmeyi zorlaştırır.",
          practice: "Toggle component'i child view olarak ayır ve binding ile kontrol et.",
          question: "@Binding neden parent state ile bağlantılıdır?"
        },
        {
          title: "Observable Veri",
          content: "Birden fazla ekranı etkileyen veri için observable model veya environment yaklaşımı kullanılabilir.",
          note: "Global state kolaylık sağlar ama kontrolsüz kullanılırsa bağımlılıkları gizler.",
          practice: "TaskStore benzeri observable bir sınıf oluştur.",
          question: "Hangi veri sadece local state, hangi veri shared state olmalıdır?"
        },
        {
          title: "Ekran Durumları",
          content: "Loading, empty, loaded ve error durumları kullanıcıya net geri bildirim verir.",
          note: "Profesyonel arayüz hata ve boş durumları da tasarlar.",
          practice: "Enum ile ekran state'i modelle ve her state için farklı view göster.",
          question: "Boş durum ile hata durumu neden aynı şey değildir?"
        }
      ]
    },
    {
      id: "navigation-lists-forms",
      title: "8. Navigation, Lists ve Forms",
      area: "SwiftUI",
      level: "Orta",
      duration: "2 hafta",
      focus: "NavigationStack, List, Form, TextField, validation ve detay ekranları",
      source: "Apple SwiftUI Pathway, SwiftUI Documentation",
      videoTitle: "100 Days of SwiftUI - Project-based SwiftUI videos",
      videoUrl: "https://www.hackingwithswift.com/100/swiftui",
      evidence: "Liste, detay ve form akışı olan çalışan mini uygulama",
      description: "Gerçek uygulamalarda sık kullanılan listeleme, detay sayfası, form girişi ve navigation akışı geliştirilir.",
      lesson: "Mobil uygulamaların büyük bölümü veri listeler, detay gösterir ve kullanıcıdan girdi alır. Bu modül, gerçek uygulama davranışının temelini oluşturur.",
      outcomes: [
        "NavigationStack ile sayfa geçişi kurar.",
        "List ve ForEach ile dinamik veri gösterir.",
        "Form, TextField ve Picker ile kullanıcı girdisi alır.",
        "Basit validation ve uyarı senaryosu yazar."
      ],
      exampleCode: "NavigationStack {\n    List(tasks) { task in\n        NavigationLink(task.title) {\n            TaskDetailView(task: task)\n        }\n    }\n}",
      checklist: [
        "NavigationStack ile listeden detay ekrana geç.",
        "Form içinde TextField, Picker ve Toggle kullan.",
        "Boş form gönderimini engelleyen validation yaz.",
        "Liste boşsa kullanıcıya anlamlı empty state göster."
      ],
      project: "Not veya görev takip mini uygulaması",
      dependency: "state-data-flow",
      modules: [
        {
          title: "Listeleme",
          content: "List ve ForEach, koleksiyon verisini ekranda sürdürülebilir şekilde göstermeyi sağlar.",
          note: "List elemanlarının kimliği doğru değilse güncelleme davranışı bozulabilir.",
          practice: "Identifiable model ile dinamik liste oluştur.",
          question: "List elemanlarında id neden önemlidir?"
        },
        {
          title: "Navigation",
          content: "NavigationStack, kullanıcıyı ana liste, detay ve düzenleme ekranları arasında taşır.",
          note: "Navigation yapısı uygulama akışını doğrudan belirler.",
          practice: "Liste öğesine basınca detay ekranı aç.",
          question: "Detay ekranına hangi veri gönderilmelidir?"
        },
        {
          title: "Form ve Validation",
          content: "Form ekranı kullanıcıdan veri alır; validation ise hatalı veriyi kaydetmeyi önler.",
          note: "Formlar kullanıcıya neyin eksik olduğunu açıkça söylemelidir.",
          practice: "Boş title durumunda uyarı göster.",
          question: "Validation kullanıcı deneyimini nasıl iyileştirir?"
        }
      ]
    },
    {
      id: "uikit-interop",
      title: "9. UIKit Farkındalığı ve SwiftUI Entegrasyonu",
      area: "UIKit",
      level: "Orta",
      duration: "1 hafta",
      focus: "UIViewController, Auto Layout, UITableView ve SwiftUI/UIKit birlikte kullanımı",
      source: "UIKit Documentation, Apple Developer Documentation",
      videoTitle: "Apple Developer Videos - UIKit and UI frameworks",
      videoUrl: "https://developer.apple.com/videos/swiftui-ui-frameworks/",
      evidence: "UIKit kavram notu ve SwiftUI içinde UIKit temsilci örneği",
      description: "Modern projelerde SwiftUI yaygınlaşsa da UIKit bilgisi, legacy kod okuma ve bazı platform API'lerini kullanma açısından önemlidir.",
      lesson: "Profesyonel iOS geliştirici yalnızca SwiftUI bilmekle kalmaz; UIKit'in ViewController, lifecycle, Auto Layout ve delegate yaklaşımını da okuyabilir. Bu bilgi, kurumsal projelerde ve SwiftUI/UIKit entegrasyonlarında avantaj sağlar.",
      outcomes: [
        "UIViewController yaşam döngüsünü temel düzeyde açıklar.",
        "Auto Layout ve constraint mantığını tanır.",
        "UITableView ve UICollectionView kullanım alanlarını ayırt eder.",
        "SwiftUI içinde UIKit bileşeni kullanılabileceğini bilir."
      ],
      exampleCode: "struct LegacyViewController: UIViewControllerRepresentable {\n    func makeUIViewController(context: Context) -> UIViewController { UIViewController() }\n    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {}\n}",
      checklist: [
        "UIViewController lifecycle metotlarını kısa notlarla açıkla.",
        "UITableView ve UICollectionView farkını yaz.",
        "Auto Layout constraint mantığını örnekle açıkla.",
        "UIViewControllerRepresentable kavramını araştır."
      ],
      project: "UIKit kavram haritası ve entegrasyon notu",
      dependency: "navigation-lists-forms",
      modules: [
        {
          title: "ViewController Lifecycle",
          content: "viewDidLoad, viewWillAppear ve viewDidAppear gibi metotlar ekranın yaşam döngüsünü yönetir.",
          note: "SwiftUI kullanırken bile UIKit lifecycle kavramları bazı entegrasyonlarda karşına çıkar.",
          practice: "Lifecycle metotlarını tablo halinde açıkla.",
          question: "viewDidLoad ile viewWillAppear farkı nedir?"
        },
        {
          title: "Auto Layout",
          content: "Auto Layout, farklı ekran boyutlarında bileşenlerin doğru yerleşmesini sağlayan constraint sistemidir.",
          note: "SwiftUI layout farklıdır ama responsive düşünme ortak beceridir.",
          practice: "Bir butonun yatay/dikey merkezlenmesini constraint olarak tarif et.",
          question: "Auto Layout hangi problemi çözer?"
        },
        {
          title: "Interop",
          content: "SwiftUI, gerekli durumlarda UIKit bileşenlerini temsilci yapılarla kullanabilir.",
          note: "Bu bilgi eski projelerle modern kod arasında köprü kurar.",
          practice: "UIViewControllerRepresentable kullanım amacını README'ye yaz.",
          question: "SwiftUI projesinde UIKit ne zaman gerekebilir?"
        }
      ]
    },
    {
      id: "data-modeling-validation",
      title: "10. Data Modeling ve Validation",
      area: "Data",
      level: "İleri",
      duration: "1 hafta",
      focus: "Domain model, DTO, Codable, validation ve test edilebilir veri yapısı",
      source: "Swift.org, Apple Data Modeling Tutorials",
      videoTitle: "Stanford CS193p - Model and architecture lectures",
      videoUrl: "https://cs193p.stanford.edu/about-cs193p",
      evidence: "Domain model, validation kuralları ve örnek unit test",
      description: "Uygulama verisinin arayüzden bağımsız, doğrulanabilir ve sürdürülebilir şekilde modellenmesi öğrenilir.",
      lesson: "Model katmanı güçlü değilse arayüz iyi görünse bile uygulama kırılgan olur. Bu modülde domain model, DTO, computed property ve validation kurallarıyla daha sağlam veri tasarımı yapılır.",
      outcomes: [
        "Domain model ile API/veritabanı modelini ayırır.",
        "Codable ile JSON dönüşümü yapar.",
        "Validation kurallarını model veya servis katmanında tanımlar.",
        "Model davranışı için basit test senaryosu yazar."
      ],
      exampleCode: "struct Habit: Identifiable, Codable {\n    let id: UUID\n    var title: String\n    var streak: Int\n\n    var isValid: Bool { !title.trimmingCharacters(in: .whitespaces).isEmpty }\n}",
      checklist: [
        "Ana projen için en az üç model oluştur.",
        "Her model için gerekli alanları ve veri tiplerini belirle.",
        "Boş veya hatalı veri için validation kuralı yaz.",
        "Model dosyalarını README'de kısa açıklamayla belgeleyin."
      ],
      project: "Validation içeren habit veya journal modeli",
      dependency: "uikit-interop",
      modules: [
        {
          title: "Domain Model",
          content: "Domain model, uygulamanın iş mantığına uygun temiz veri temsilidir.",
          note: "API'den gelen veri her zaman doğrudan ekranda kullanılmamalıdır.",
          practice: "API modeli ve ekran modeli için iki ayrı struct tasarla.",
          question: "DTO ile domain model neden ayrılabilir?"
        },
        {
          title: "Codable",
          content: "Codable, JSON ile Swift modeli arasında dönüşüm yapmayı kolaylaştırır.",
          note: "Networking modülünde bu yapı temel hale gelecek.",
          practice: "Örnek JSON verisini Swift modeline çevirecek Codable struct yaz.",
          question: "Codable hangi iki protokolün birleşimidir?"
        },
        {
          title: "Validation",
          content: "Validation, verinin kaydedilmeden veya gönderilmeden önce kurallara uygun olup olmadığını kontrol eder.",
          note: "Validation sadece arayüzde değil, model veya servis seviyesinde de düşünülmelidir.",
          practice: "Boş title ve negatif sayı için kontrol yaz.",
          question: "Validation kodu neden test edilebilir olmalıdır?"
        }
      ]
    },
    {
      id: "persistence-security",
      title: "11. Veri Saklama, SwiftData ve Güvenli Depolama",
      area: "Data",
      level: "İleri",
      duration: "2 hafta",
      focus: "UserDefaults, Keychain, SwiftData, Core Data ve offline veri",
      source: "SwiftData Documentation, Core Data Documentation",
      videoTitle: "Apple Developer Videos - SwiftData and Core Data",
      videoUrl: "https://developer.apple.com/videos/swiftui-ui-frameworks/",
      evidence: "Kalıcı veri kullanan çalışan mini uygulama ve saklama stratejisi notu",
      description: "Kullanıcı verilerinin uygulama kapandıktan sonra korunması, hassas verinin doğru yerde saklanması ve offline veri yaklaşımı öğrenilir.",
      lesson: "Her veri aynı yerde saklanmaz. Küçük tercih bilgileri UserDefaults, hassas bilgiler Keychain, uygulama kayıtları ise SwiftData/Core Data gibi kalıcı veri yapılarıyla ele alınmalıdır.",
      outcomes: [
        "UserDefaults kullanım alanını açıklar.",
        "Hassas veri için Keychain tercih edilmesi gerektiğini bilir.",
        "SwiftData/Core Data ile kalıcı veri fikrini kavrar.",
        "Offline-first senaryosu tasarlar."
      ],
      exampleCode: "@Model\nfinal class JournalEntry {\n    var title: String\n    var createdAt: Date\n\n    init(title: String, createdAt: Date = .now) {\n        self.title = title\n        self.createdAt = createdAt\n    }\n}",
      checklist: [
        "Küçük kullanıcı tercihini UserDefaults ile sakla.",
        "Hassas veri saklama için Keychain araştırma notu yaz.",
        "SwiftData veya Core Data model taslağı oluştur.",
        "Offline veri ve senkronizasyon risklerini listele."
      ],
      project: "Kalıcı veri kullanan günlük veya görev uygulaması",
      dependency: "data-modeling-validation",
      modules: [
        {
          title: "Saklama Stratejisi",
          content: "Tercih, hassas bilgi ve uygulama kaydı farklı saklama araçları gerektirir.",
          note: "Yanlış depolama seçimi güvenlik ve sürdürülebilirlik problemi doğurur.",
          practice: "Projenizdeki verileri UserDefaults, Keychain ve database olarak sınıflandır.",
          question: "Token neden UserDefaults içinde tutulmamalıdır?"
        },
        {
          title: "SwiftData / Core Data",
          content: "Kalıcı veri framework'leri uygulama kayıtlarının cihazda düzenli tutulmasını sağlar.",
          note: "Model ilişkileri ve migration konusu büyüyen projelerde önemlidir.",
          practice: "Bir model için kalıcı veri alanlarını tasarla.",
          question: "Kalıcı veri geçici state'ten nasıl ayrılır?"
        },
        {
          title: "Offline Senaryo",
          content: "Offline-first yaklaşım, internet yokken de temel işlevlerin devam etmesini hedefler.",
          note: "Offline veri için sonradan senkronizasyon ve çakışma yönetimi düşünülmelidir.",
          practice: "İnternet yokken hangi ekranların çalışacağını yaz.",
          question: "Offline çalışma kullanıcı deneyimini nasıl etkiler?"
        }
      ]
    },
    {
      id: "networking-api",
      title: "12. Networking, REST API ve Hata Yönetimi",
      area: "Networking",
      level: "İleri",
      duration: "2 hafta",
      focus: "URLSession, Codable, async API çağrısı, error state ve authentication",
      source: "URLSession Documentation, Donny Wals, SwiftLee",
      videoTitle: "Donny Wals - iOS networking and concurrency videos/articles",
      videoUrl: "https://www.donnywals.com/",
      evidence: "Public API'den veri çeken ve loading/error state gösteren ekran",
      description: "Gerçek uygulamalarda sunucudan veri alma, JSON parse etme, hata durumlarını yönetme ve kullanıcıya doğru geri bildirim verme öğrenilir.",
      lesson: "Networking yalnızca veri çekmek değildir. İstek durumu, status code, decoding hatası, internet kesintisi, loading state ve token yönetimi birlikte ele alınmalıdır.",
      outcomes: [
        "URLSession ile GET isteği yapar.",
        "Codable ile JSON parse eder.",
        "Loading, success ve error durumlarını yönetir.",
        "Token tabanlı kimlik doğrulama mantığını açıklar."
      ],
      exampleCode: "func loadPosts() async throws -> [Post] {\n    let url = URL(string: \"https://jsonplaceholder.typicode.com/posts\")!\n    let (data, response) = try await URLSession.shared.data(from: url)\n    guard (response as? HTTPURLResponse)?.statusCode == 200 else { throw URLError(.badServerResponse) }\n    return try JSONDecoder().decode([Post].self, from: data)\n}",
      checklist: [
        "Public API için Codable model oluştur.",
        "URLSession ile async veri çek.",
        "Loading, error ve empty state tasarla.",
        "Status code ve decoding hatalarını ayrı ele al."
      ],
      project: "REST API haber veya post listeleme uygulaması",
      dependency: "persistence-security",
      modules: [
        {
          title: "API İsteği",
          content: "URLSession, sunucuyla HTTP üzerinden veri alışverişi yapmayı sağlar.",
          note: "İstek sadece başarılı veri değil, response ve hata bilgisiyle birlikte düşünülmelidir.",
          practice: "Public API'den liste verisi çek.",
          question: "HTTP status code neden kontrol edilmelidir?"
        },
        {
          title: "JSON ve Codable",
          content: "Codable, JSON verisini Swift modeline güvenli şekilde dönüştürür.",
          note: "Model alanları API response ile uyumsuzsa decoding hatası oluşabilir.",
          practice: "API response için Codable model yaz ve parse et.",
          question: "Decoding hatası hangi durumda oluşur?"
        },
        {
          title: "Hata Yönetimi",
          content: "Kullanıcı, ağ isteğinin devam ettiğini veya hata aldığını açıkça görmelidir.",
          note: "Profesyonel uygulama ağ hatasını sessizce yutmaz.",
          practice: "Loading spinner, hata mesajı ve tekrar dene butonu ekle.",
          question: "Retry butonu kullanıcıya ne kazandırır?"
        }
      ]
    },
    {
      id: "concurrency",
      title: "13. Swift Concurrency",
      area: "Concurrency",
      level: "İleri",
      duration: "2 hafta",
      focus: "async/await, Task, MainActor, actor ve data race güvenliği",
      source: "Swift.org Concurrency, WWDC Swift Concurrency",
      videoTitle: "Apple Developer Videos - Swift Concurrency",
      videoUrl: "https://developer.apple.com/videos/swift/",
      evidence: "Concurrency kullanan API ekranı ve MainActor notu",
      description: "Asenkron işlemlerin okunabilir, güvenli ve kullanıcı arayüzünü kilitlemeden yazılması öğrenilir.",
      lesson: "Modern iOS uygulamaları ağ isteği, dosya okuma, görsel işleme ve veri güncelleme gibi işlemleri asenkron yürütür. Swift concurrency, bu işleri daha okunabilir ve veri yarışına karşı daha güvenli hale getirir.",
      outcomes: [
        "async/await ile asenkron fonksiyon yazar.",
        "Task ve MainActor kullanımını açıklar.",
        "Actor yapısının paylaşılan veri güvenliğine katkısını bilir.",
        "UI güncellemelerinin main thread/main actor ilişkisini kavrar."
      ],
      exampleCode: "@MainActor\nfinal class PostViewModel: ObservableObject {\n    @Published var posts: [Post] = []\n\n    func load() async {\n        posts = (try? await service.fetchPosts()) ?? []\n    }\n}",
      checklist: [
        "Bir async fonksiyon yaz ve await ile çağır.",
        "UI güncellemesini MainActor bağlamında düşün.",
        "Paylaşılan veri için actor kullanım senaryosu araştır.",
        "Concurrency hatalarını ve risklerini kısa notla açıkla."
      ],
      project: "Async API çağrısı yapan ViewModel",
      dependency: "networking-api",
      modules: [
        {
          title: "async/await",
          content: "async/await, bekleyen işlemleri daha okunabilir ve sıralı kod gibi yazmayı sağlar.",
          note: "await kullanılan satırda fonksiyon askıya alınabilir ama ana thread gereksiz yere kilitlenmez.",
          practice: "fetch fonksiyonunu async throws olarak yaz.",
          question: "await neyi bekler?"
        },
        {
          title: "MainActor",
          content: "UI ile ilişkili state güncellemeleri main actor üzerinde güvenli şekilde yapılmalıdır.",
          note: "Arayüzü background thread'den güncellemek hataya yol açabilir.",
          practice: "ViewModel'i @MainActor ile işaretle.",
          question: "UI güncellemeleri neden main actor ile ilişkilidir?"
        },
        {
          title: "Actor ve Veri Güvenliği",
          content: "Actor, paylaşılan veriye kontrollü erişim sağlayarak data race riskini azaltır.",
          note: "Büyük projelerde concurrency güvenliği mimari kararın parçasıdır.",
          practice: "Cache yöneten basit bir actor örneği yaz.",
          question: "Race condition nedir?"
        }
      ]
    },
    {
      id: "architecture-mvvm-di",
      title: "14. Mimari: MVVM, DI ve Repository",
      area: "Architecture",
      level: "İleri",
      duration: "2 hafta",
      focus: "ViewModel, servis, repository, dependency injection ve dosya organizasyonu",
      source: "objc.io App Architecture, Stanford CS193p, SwiftLee",
      videoTitle: "Swiftful Thinking - Architecture and advanced SwiftUI videos",
      videoUrl: "https://www.swiftful-thinking.com/",
      evidence: "MVVM yapısına ayrılmış mini uygulama ve mimari diyagram",
      description: "Proje büyüdükçe ekran, iş mantığı ve veri erişiminin ayrılması; test edilebilir, okunabilir mimari kurulması öğrenilir.",
      lesson: "Başlangıç projelerinde her şeyi View içine yazmak kolay görünür. Ancak profesyonel projelerde View, ViewModel, servis ve repository sorumlulukları ayrılmalıdır. Bu ayrım test, bakım ve ekip çalışması için kritiktir.",
      outcomes: [
        "MVVM yapısında View ve ViewModel sorumluluklarını ayırır.",
        "Dependency Injection ile servis bağımlılığı verir.",
        "Repository pattern ile veri kaynağını soyutlar.",
        "Dosya ve klasör yapısını sürdürülebilir hale getirir."
      ],
      exampleCode: "final class TaskViewModel: ObservableObject {\n    private let repository: TaskRepository\n\n    init(repository: TaskRepository) {\n        self.repository = repository\n    }\n}",
      checklist: [
        "View içindeki iş mantığını ViewModel'e taşı.",
        "Servis veya repository protokolü tanımla.",
        "ViewModel'e bağımlılığı init üzerinden ver.",
        "Mimariyi README içinde kısa diyagramla anlat."
      ],
      project: "MVVM mimarisine ayrılmış görev takip uygulaması",
      dependency: "concurrency",
      modules: [
        {
          title: "MVVM",
          content: "View arayüzü gösterir, ViewModel ekran verisini ve kullanıcı aksiyonlarının mantığını yönetir.",
          note: "View'ın servis çağrısı yapması kodu hızlıca karmaşıklaştırır.",
          practice: "Liste ekranındaki state'i ViewModel'e taşı.",
          question: "ViewModel hangi sorumluluğu üstlenir?"
        },
        {
          title: "Dependency Injection",
          content: "Bağımlılıkların dışarıdan verilmesi kodu esnek ve test edilebilir hale getirir.",
          note: "Doğrudan nesne oluşturmak testlerde mock kullanımını zorlaştırır.",
          practice: "Repository bağımlılığını init ile ViewModel'e ver.",
          question: "DI test yazmayı nasıl kolaylaştırır?"
        },
        {
          title: "Repository",
          content: "Repository, API veya yerel veritabanı gibi veri kaynaklarını uygulama katmanından soyutlar.",
          note: "Veri kaynağı değişse bile ViewModel'in aynı kalması hedeflenir.",
          practice: "Mock repository ile çalışan preview veya test hazırla.",
          question: "Repository pattern hangi bağımlılığı azaltır?"
        }
      ]
    },
    {
      id: "testing-quality",
      title: "15. Testing ve Kalite Kontrol",
      area: "Quality",
      level: "İleri",
      duration: "2 hafta",
      focus: "XCTest, Swift Testing, UI test, mock servis ve regression kontrolü",
      source: "XCTest Documentation, Swift Testing Documentation",
      videoTitle: "Apple Developer Videos - Swift Testing and Xcode tests",
      videoUrl: "https://developer.apple.com/videos/developer-tools",
      evidence: "Unit test, UI test senaryosu ve test edilen ViewModel",
      description: "Projedeki iş mantığının beklenen şekilde çalıştığını doğrulamak ve değişikliklerden sonra bozulmaları yakalamak için test yazılır.",
      lesson: "Test yazmak yalnızca büyük şirketlerin işi değildir. Küçük projede bile ViewModel, validation ve servis davranışları test edilirse proje daha güvenilir hale gelir.",
      outcomes: [
        "Unit test ve UI test farkını açıklar.",
        "ViewModel için test senaryosu yazar.",
        "Mock servis ile kontrollü test yapar.",
        "Test coverage yerine anlamlı senaryoya odaklanır."
      ],
      exampleCode: "func testEmptyTitleIsInvalid() {\n    let habit = Habit(id: UUID(), title: \"\", streak: 0)\n    XCTAssertFalse(habit.isValid)\n}",
      checklist: [
        "Validation için en az iki unit test yaz.",
        "Mock repository ile başarı ve hata durumunu test et.",
        "Basit UI test akışı tanımla.",
        "Test sonuçlarını README'de kısaca açıkla."
      ],
      project: "Test edilmiş ViewModel ve validation katmanı",
      dependency: "architecture-mvvm-di",
      modules: [
        {
          title: "Unit Test",
          content: "Unit test, küçük bir kod parçasının beklenen sonucu üretip üretmediğini kontrol eder.",
          note: "Önce saf iş mantığı ve model validation test edilmelidir.",
          practice: "Boş title ve geçerli title için iki test yaz.",
          question: "Unit test hangi kodlar için daha kolay yazılır?"
        },
        {
          title: "Mock Servis",
          content: "Mock servis gerçek API olmadan kontrollü veri döndürür.",
          note: "Testler internet bağlantısına veya gerçek sunucuya bağımlı olmamalıdır.",
          practice: "Başarı ve hata döndüren iki mock repository oluştur.",
          question: "Mock kullanmak test güvenilirliğini nasıl artırır?"
        },
        {
          title: "UI Test",
          content: "UI test, kullanıcının ekrandaki akışını otomatik olarak doğrular.",
          note: "Tüm arayüzü test etmek yerine kritik akışlara odaklanmak daha verimlidir.",
          practice: "Listeye kayıt ekleme akışı için UI test senaryosu yaz.",
          question: "UI test neden unit testten daha yavaş olabilir?"
        }
      ]
    },
    {
      id: "accessibility-hig",
      title: "16. Accessibility ve Kullanıcı Deneyimi",
      area: "Quality",
      level: "İleri",
      duration: "1 hafta",
      focus: "VoiceOver, Dynamic Type, contrast, empty/error states ve HIG uyumu",
      source: "Apple Accessibility, Human Interface Guidelines",
      videoTitle: "Apple Developer Videos - Accessibility & Inclusion",
      videoUrl: "https://developer.apple.com/videos/accessibility-inclusion",
      evidence: "Accessibility label eklenmiş ve Dynamic Type kontrolü yapılmış ekranlar",
      description: "Uygulamanın daha fazla kullanıcı tarafından anlaşılır, okunabilir ve erişilebilir şekilde kullanılabilmesi sağlanır.",
      lesson: "Profesyonel bir uygulama yalnızca ortalama kullanıcıyı değil, farklı görme, okuma ve etkileşim ihtiyaçlarına sahip kullanıcıları da dikkate alır.",
      outcomes: [
        "VoiceOver ve accessibility label kullanımını açıklar.",
        "Dynamic Type ve metin ölçeklenmesini kontrol eder.",
        "Renk kontrastı ve okunabilirliği değerlendirir.",
        "Boş, hata ve yüklenme durumlarını kullanıcı dostu tasarlar."
      ],
      exampleCode: "Button(\"Save\") {\n    save()\n}\n.accessibilityLabel(\"Save habit\")\n.accessibilityHint(\"Adds the current habit to your list\")",
      checklist: [
        "İkon butonlara anlamlı accessibilityLabel ekle.",
        "Dynamic Type büyüyünce metin taşmasını kontrol et.",
        "Renk kontrastı düşük alanları düzelt.",
        "Boş ve hata durumlarını açıklayıcı metinlerle düzenle."
      ],
      project: "Erişilebilirliği iyileştirilmiş SwiftUI ekranı",
      dependency: "testing-quality",
      modules: [
        {
          title: "VoiceOver",
          content: "VoiceOver, ekran öğelerini sesli okuyarak kullanıcıların uygulamayla etkileşim kurmasını sağlar.",
          note: "Özellikle sadece ikon olan butonlarda label kritik hale gelir.",
          practice: "Favori, sil ve kaydet butonlarına açıklayıcı label ekle.",
          question: "Bir ikon buton label olmadan neden sorun çıkarabilir?"
        },
        {
          title: "Dynamic Type",
          content: "Dynamic Type, metinlerin kullanıcının sistem yazı boyutu tercihine göre ölçeklenmesini sağlar.",
          note: "Sabit yükseklikli alanlar büyük fontta taşma üretebilir.",
          practice: "Büyük yazı boyutunda ana ekranı kontrol et.",
          question: "Metin ölçeklenince layout nasıl etkilenebilir?"
        },
        {
          title: "Boş ve Hata Durumları",
          content: "Kullanıcı ne olduğunu ve ne yapması gerektiğini anlamalıdır.",
          note: "İyi hata mesajı suçlayıcı değil, yönlendirici olur.",
          practice: "Ağ hatası için tekrar dene butonlu ekran tasarla.",
          question: "İyi empty state hangi bilgiyi verir?"
        }
      ]
    },
    {
      id: "performance-instruments",
      title: "17. Performance, Instruments ve Bellek Yönetimi",
      area: "Quality",
      level: "İleri",
      duration: "1 hafta",
      focus: "Instruments, memory leak, Time Profiler, lazy loading ve render performansı",
      source: "Apple Developer Videos, SwiftLee Xcode/Instruments",
      videoTitle: "Apple Developer Videos - Instruments and performance",
      videoUrl: "https://developer.apple.com/videos/developer-tools",
      evidence: "Performans kontrol notu ve optimize edilmiş liste ekranı",
      description: "Uygulamanın yavaşlamasına, gereksiz bellek kullanımına ve render problemlerine neden olan durumlar temel düzeyde analiz edilir.",
      lesson: "Performans sadece ileri seviye uygulamalarda değil, uzun listelerde, görsel yüklemede ve gereksiz state güncellemelerinde de önemlidir. Instruments, tahmin yerine ölçüm yapmayı sağlar.",
      outcomes: [
        "LazyVStack/LazyVGrid kullanım amacını açıklar.",
        "Instruments ile temel performans analizi fikrini bilir.",
        "Memory leak ve retain cycle riskini tanır.",
        "Gereksiz view güncellemesi ve ağır işlem risklerini değerlendirir."
      ],
      exampleCode: "ScrollView {\n    LazyVStack(spacing: 12) {\n        ForEach(items) { item in\n            ItemRow(item: item)\n        }\n    }\n}",
      checklist: [
        "Uzun liste için lazy layout kullan.",
        "Görseller için gereksiz büyük asset kullanımını kontrol et.",
        "weak self ve retain cycle kavramını not al.",
        "Performans iyileştirmesini önce/sonra şeklinde açıkla."
      ],
      project: "Optimize edilmiş uzun liste ekranı",
      dependency: "accessibility-hig",
      modules: [
        {
          title: "Ölçmeden Optimize Etmeme",
          content: "Performans problemi tahminle değil, ölçüm ve gözlemle değerlendirilmelidir.",
          note: "Erken optimizasyon yerine kullanıcıyı etkileyen darboğazlara odaklan.",
          practice: "Yavaş olduğunu düşündüğün ekran için gözlem notu yaz.",
          question: "Neden ölçüm yapmadan optimizasyon risklidir?"
        },
        {
          title: "Lazy Layout",
          content: "Lazy container'lar uzun içerikte yalnızca ihtiyaç duyulan öğeleri üretir.",
          note: "Kısa listede fark az olabilir ama büyük veride önemlidir.",
          practice: "VStack kullanan uzun listeyi LazyVStack'e çevir.",
          question: "LazyVStack ne zaman avantaj sağlar?"
        },
        {
          title: "Bellek ve ARC",
          content: "Class referansları güçlü tutulduğunda retain cycle oluşabilir.",
          note: "Closure içinde self kullanımı dikkat gerektirir.",
          practice: "weak self kullanım senaryosunu örnekle açıkla.",
          question: "Retain cycle nasıl oluşur?"
        }
      ]
    },
    {
      id: "ai-spatial-awareness",
      title: "18. AI, Core ML ve Spatial Computing Farkındalığı",
      area: "Advanced",
      level: "İleri",
      duration: "1 hafta",
      focus: "Core ML, Create ML, Vision, Natural Language, visionOS ve özellik fikri",
      source: "Core ML Documentation, Create ML, visionOS Documentation",
      videoTitle: "Apple Developer Videos - Machine Learning & AI",
      videoUrl: "https://developer.apple.com/videos/machine-learning-ai",
      evidence: "Ana uygulamaya eklenebilecek AI veya spatial özellik konsepti",
      description: "Modern Apple ekosisteminde makine öğrenmesi, yapay zeka ve spatial computing başlıkları araştırılır; gerçekçi özellik fikirleri üretilir.",
      lesson: "Bu modül ileri seviye keşif alanıdır. Amaç her teknolojiyi derinlemesine uygulamak değil, hangi durumda hangi framework'ün değer katabileceğini anlayıp proje fikrine bilinçli özellik önermektir.",
      outcomes: [
        "Core ML ve Create ML kullanım amacını açıklar.",
        "Vision ve Natural Language framework'lerini tanır.",
        "Bir uygulama için anlamlı AI özellik fikri üretir.",
        "visionOS ve spatial deneyim farkındalığı kazanır."
      ],
      exampleCode: "let idea = \"Analyze journal mood with Natural Language\"\nlet userValue = \"Helps users understand weekly mood patterns\"\nprint(\"\\(idea): \\(userValue)\")",
      checklist: [
        "Uygulamana gerçekten değer katacak bir AI özellik fikri yaz.",
        "Bu fikir için hangi Apple framework'ünün uygun olduğunu belirt.",
        "Kullanıcı faydasını teknik özellikten ayrı açıkla.",
        "Spatial computing için alternatif bir konsept üret."
      ],
      project: "AI veya spatial özellik konsept dokümanı",
      dependency: "performance-instruments",
      modules: [
        {
          title: "AI Özellik Seçimi",
          content: "AI özelliği sadece gösterişli değil, kullanıcıya somut değer sağlayan bir probleme bağlanmalıdır.",
          note: "Her projeye AI eklemek zorunda değilsin; doğru problem varsa anlamlıdır.",
          practice: "Uygulaman için bir AI kullanım senaryosu yaz.",
          question: "Bu AI özelliği hangi kullanıcı problemini azaltıyor?"
        },
        {
          title: "Apple ML Araçları",
          content: "Core ML model entegrasyonu, Create ML model üretimi, Vision görsel, Natural Language metin işlemleri için kullanılabilir.",
          note: "Framework seçimi veri türüne göre yapılır.",
          practice: "Fikrine uygun framework'ü seç ve nedenini yaz.",
          question: "Metin analizi için hangi framework daha uygundur?"
        },
        {
          title: "Spatial Farkındalık",
          content: "visionOS, uygulamayı düz ekran dışında mekansal deneyim olarak düşünmeye imkan verir.",
          note: "Başlangıç projesinde konsept üretmek yeterli olabilir.",
          practice: "Ana uygulamanın visionOS versiyonu için kısa fikir yaz.",
          question: "Spatial deneyim kullanıcıya neyi farklı sunar?"
        }
      ]
    },
    {
      id: "distribution-testflight",
      title: "19. TestFlight, App Store Connect ve Yayın Hazırlığı",
      area: "Release",
      level: "İleri",
      duration: "1 hafta",
      focus: "Build, archive, TestFlight, app metadata, privacy ve sürüm notu",
      source: "TestFlight Overview, App Store Connect",
      videoTitle: "Apple Developer - App Store Connect and TestFlight",
      videoUrl: "https://developer.apple.com/app-store-connect/",
      evidence: "Yayın kontrol listesi, sürüm notu ve mağaza açıklaması taslağı",
      description: "Uygulamanın yalnızca geliştirilmesi değil; test kullanıcısına sunulması, geri bildirim alınması ve yayın için hazırlanması öğrenilir.",
      lesson: "Profesyonel proje, çalışan koddan ibaret değildir. Ekran görüntüsü, uygulama açıklaması, gizlilik bilgisi, sürüm notu, test planı ve dağıtım süreci de teslim kalitesinin parçasıdır.",
      outcomes: [
        "TestFlight'ın beta test sürecindeki yerini açıklar.",
        "App Store Connect temel kavramlarını tanır.",
        "Sürüm notu ve test bilgisi yazar.",
        "Gizlilik ve uygulama açıklaması gereksinimlerini araştırır."
      ],
      exampleCode: "let version = \"1.0.0\"\nlet releaseNote = \"Initial beta release with task list, detail screen and local persistence.\"\nprint(\"Release \\(version): \\(releaseNote)\")",
      checklist: [
        "TestFlight sürecinin adımlarını not al.",
        "Final proje için 1.0.0 sürüm notu yaz.",
        "Uygulama açıklaması ve ekran görüntüsü listesi hazırla.",
        "Gizlilik açısından hangi verilerin toplandığını belirt."
      ],
      project: "Dağıtıma hazır release hazırlık paketi",
      dependency: "ai-spatial-awareness",
      modules: [
        {
          title: "TestFlight",
          content: "TestFlight, uygulamayı yayın öncesi test kullanıcılarına dağıtmayı ve geri bildirim almayı sağlar.",
          note: "Beta test, final yayın öncesi hataları ve UX sorunlarını yakalamaya yardım eder.",
          practice: "TestFlight için test edilecek özellikler listesini yaz.",
          question: "TestFlight neden doğrudan App Store yayınından önce kullanılır?"
        },
        {
          title: "App Metadata",
          content: "Uygulama adı, açıklama, kategori, ekran görüntüleri ve sürüm notları yayın hazırlığının parçasıdır.",
          note: "Kötü açıklama iyi projeyi bile zayıf gösterebilir.",
          practice: "Uygulaman için kısa ve uzun açıklama yaz.",
          question: "Sürüm notu kullanıcıya ne anlatmalıdır?"
        },
        {
          title: "Privacy",
          content: "Kullanıcıdan hangi verilerin alındığı ve nasıl kullanıldığı açık olmalıdır.",
          note: "Gizlilik konusu teknik değil, ürün güveni meselesidir.",
          practice: "Projenin topladığı verileri listele ve gerekçesini yaz.",
          question: "Kişisel veri toplamayan uygulama bunu nasıl belirtmelidir?"
        }
      ]
    },
    {
      id: "portfolio-interview",
      title: "20. Final Portfolyo, README ve Mülakat Hazırlığı",
      area: "Career",
      level: "İleri",
      duration: "1 hafta",
      focus: "GitHub sunumu, teknik anlatım, ekran görüntüsü, demo ve mülakat savunması",
      source: "GitHub README Docs, Stanford CS193p, Hacking with Swift",
      videoTitle: "Sean Allen - iOS interview preparation videos",
      videoUrl: "https://www.youtube.com/@seanallen",
      evidence: "Tamamlanmış GitHub reposu, README, ekran görüntüleri ve proje anlatım metni",
      description: "Öğrenilen konular final projede toparlanır; proje dışarıdan incelenebilir, çalıştırılabilir ve mülakatta anlatılabilir hale getirilir.",
      lesson: "Portfolyo projesi yalnızca kod dosyalarıyla sunulmaz. İyi README, net kurulum adımları, ekran görüntüleri, kullanılan teknolojiler, mimari kararlar, karşılaşılan sorunlar ve öğrenilenler projeyi profesyonel gösterir.",
      outcomes: [
        "README dosyasını profesyonel formatta tamamlar.",
        "Proje özelliklerini ve mimari kararları açıklayabilir.",
        "Ekran görüntüsü ve demo akışını hazırlar.",
        "Mülakatta proje üzerinden teknik soru cevaplayabilir."
      ],
      exampleCode: "let portfolioSections = [\"Purpose\", \"Features\", \"Tech Stack\", \"Architecture\", \"Screenshots\", \"Lessons Learned\"]\nprint(portfolioSections.joined(separator: \" / \"))",
      checklist: [
        "README içine amaç, özellikler, teknoloji ve kurulum adımlarını ekle.",
        "En az 4 ekran görüntüsü ve kısa açıklama hazırla.",
        "Mimari kararları ve zorlandığın noktaları yaz.",
        "Projenin 2 dakikalık teknik anlatım metnini hazırla."
      ],
      project: "Yayınlanabilir iOS junior portfolyo projesi",
      dependency: "distribution-testflight",
      modules: [
        {
          title: "README Kalitesi",
          content: "README, projeye ilk bakan kişinin amacı, özellikleri ve çalıştırma adımlarını anlamasını sağlar.",
          note: "İyi README teknik emeğini görünür hale getirir.",
          practice: "README için amaç, özellikler, teknoloji, kurulum ve ekran görüntüsü başlıklarını doldur.",
          question: "README okumadan proje anlaşılır mı?"
        },
        {
          title: "Mimari Anlatım",
          content: "Mülakatta proje anlatırken problem, çözüm, mimari, veri akışı, test ve zorluklar sırayla açıklanmalıdır.",
          note: "Ezber yerine kendi kararlarını savunabilmek önemlidir.",
          practice: "Projenin mimarisini 5 cümlede anlat.",
          question: "Bu projede neden MVVM veya benzer bir ayrım kullandın?"
        },
        {
          title: "Demo ve Kanıt",
          content: "Ekran görüntüleri, kısa demo videosu ve commit geçmişi projenin gerçekten geliştirildiğini gösterir.",
          note: "Portfolyo, sadece final sonuç değil süreç kanıtı da ister.",
          practice: "Final ekran görüntülerini sıraya koy ve her birine kısa açıklama yaz.",
          question: "Projedeki en güçlü teknik kararın hangisi?"
        }
      ]
    }
  ],
  legacyRoadmapTopics: [
    {
      id: "programming-foundations",
      title: "Programlama ve iOS Temelleri",
      area: "Foundations",
      level: "Başlangıç",
      description: "Değişken, kontrol akışı, OOP, veri yapıları, algoritma mantığı ve iOS ekosisteminin temel çalışma düzeni öğrenilir.",
      lesson: "roadmap.sh iOS rotasındaki ilk adım, iOS koduna geçmeden önce genel programlama temellerini güçlendirmektir. Bu modül, Swift öğrenmeden önce problem çözme ve temel yazılım kavramlarını sağlamlaştırır.",
      outcomes: [
        "Temel programlama kavramlarını açıklar.",
        "Basit algoritmaları adım adım tasarlar.",
        "iOS ekosistemindeki uygulama, cihaz ve App Store ilişkisini tanır.",
        "Öğrenme sürecini portfolyo mantığıyla takip eder."
      ],
      exampleCode: "let numbers = [10, 20, 30]\nvar total = 0\n\nfor number in numbers {\n    total += number\n}\n\nprint(\"Average: \\(total / numbers.count)\")",
      checklist: [
        "Değişken, koşul ve döngü kavramlarını küçük örneklerle tekrar et.",
        "Bir problemi sözde kod ile adımlara böl.",
        "iOS geliştiricinin kullandığı temel araçları listele.",
        "İlk çalışma notlarını proje klasörüne ekle."
      ],
      project: "Temel algoritma ve not hesaplama mini projesi",
      dependency: null
    },
    {
      id: "swift-language",
      title: "Swift Dili",
      area: "Swift",
      level: "Başlangıç",
      description: "Swift syntax, optionals, collection types, functions, closures, error handling ve protocol-oriented yaklaşım öğrenilir.",
      lesson: "Swift, modern iOS geliştirmenin ana dilidir. Bu aşamada sadece syntax değil, güvenli tip sistemi ve optionals gibi Swift'i diğer dillerden ayıran özellikler de öğrenilir.",
      outcomes: [
        "let, var, optional ve guard kullanımını açıklar.",
        "Array, Dictionary ve Set koleksiyonlarını kullanır.",
        "Closure ve function farkını örnekle gösterir.",
        "Protocol ve extension ile tekrar kullanılabilir yapı kurar."
      ],
      exampleCode: "func greet(userName: String?) -> String {\n    guard let name = userName else {\n        return \"Guest\"\n    }\n    return \"Hello, \\(name)\"\n}\n\nprint(greet(userName: \"Burak\"))",
      checklist: [
        "Optional içeren en az 3 örnek yaz.",
        "Array ve Dictionary kullanan küçük bir veri listesi hazırla.",
        "Closure alan bir fonksiyon dene.",
        "Swift örneklerini proje dosyana ekle."
      ],
      project: "Swift console task tracker",
      dependency: "programming-foundations"
    },
    {
      id: "objective-c-awareness",
      title: "Objective-C Farkındalığı",
      area: "Legacy",
      level: "Başlangıç",
      description: "Modern projelerde nadiren yazılsa da eski iOS kodlarını okuyabilmek için Objective-C syntax ve Swift köprüleme mantığı tanınır.",
      lesson: "roadmap.sh, iOS geliştiricisinin Objective-C ile karşılaşabileceğini vurgular. Bu modül derin Objective-C öğretmez; legacy projelerde kod okuyabilmek için temel farkındalık kazandırır.",
      outcomes: [
        "Objective-C dosya yapısını tanır.",
        "Header ve implementation ayrımını açıklar.",
        "Swift ile Objective-C arasındaki köprüleme fikrini bilir.",
        "Legacy kod gördüğünde temel akışı takip eder."
      ],
      exampleCode: "@interface User : NSObject\n@property NSString *name;\n@end\n\n@implementation User\n@end",
      checklist: [
        "Objective-C'de .h ve .m dosya görevlerini araştır.",
        "Swift ve Objective-C syntax farklarını tablo haline getir.",
        "Bir Objective-C class örneğini oku.",
        "Kısa notlarını portfolyo deposuna ekle."
      ],
      project: "Swift ve Objective-C karşılaştırma notu",
      dependency: "swift-language"
    },
    {
      id: "ios-architecture-basics",
      title: "iOS Uygulama Mimarisi",
      area: "Architecture",
      level: "Başlangıç",
      description: "App lifecycle, scene lifecycle, bundle, sandbox, permissions ve uygulama klasör yapısı öğrenilir.",
      lesson: "Bir iOS uygulaması sadece ekranlardan oluşmaz. Uygulamanın başlama, arka plana geçme, veri saklama ve izin yönetme süreçleri mimari düşünmenin temelidir.",
      outcomes: [
        "App lifecycle ve scene lifecycle kavramlarını ayırt eder.",
        "iOS sandbox mantığını açıklar.",
        "Info.plist ve app bundle görevlerini tanır.",
        "Uygulama izinlerinin kullanıcı deneyimine etkisini açıklar."
      ],
      exampleCode: "func sceneDidBecomeActive(_ scene: UIScene) {\n    print(\"App is active\")\n}\n\nfunc sceneDidEnterBackground(_ scene: UIScene) {\n    print(\"App moved to background\")\n}",
      checklist: [
        "Yeni bir iOS projesinin klasör yapısını incele.",
        "Lifecycle metotlarını araştırıp not al.",
        "Info.plist içinde izin açıklamalarını gözlemle.",
        "Mimari notlarını proje dosyana ekle."
      ],
      project: "iOS lifecycle gözlem projesi",
      dependency: "objective-c-awareness"
    },
    {
      id: "xcode-tooling",
      title: "Xcode ve Geliştirme Araçları",
      area: "Xcode",
      level: "Başlangıç",
      description: "Xcode, simulator, debugging, breakpoints, Instruments ve Git kullanım akışı öğrenilir.",
      lesson: "roadmap.sh rotasında Xcode, iOS geliştirmenin merkezi aracı olarak yer alır. Bu modül, kod yazmanın yanında uygulamayı çalıştırma, hata ayıklama ve sürüm kontrolünü yönetmeye odaklanır.",
      outcomes: [
        "Simulator üzerinde uygulama çalıştırır.",
        "Breakpoint ile hata ayıklama yapar.",
        "Xcode içinde Git değişikliklerini takip eder.",
        "Basit performans gözlemi için araçları tanır."
      ],
      exampleCode: "let userName = \"iOSPath\"\nprint(\"Debug value: \\(userName)\")\n// Breakpoint ekleyip bu satırdaki değeri incele.",
      checklist: [
        "Xcode'da yeni bir proje oluştur.",
        "Simulator'da farklı cihaz seçerek çalıştır.",
        "En az bir breakpoint ile değişken değerini incele.",
        "Projeyi çalışma klasörüne düzenli şekilde kaydet."
      ],
      project: "Xcode debug deneme uygulaması",
      dependency: "ios-architecture-basics"
    },
    {
      id: "uikit-interface",
      title: "UIKit ile Arayüz Geliştirme",
      area: "UIKit",
      level: "Orta",
      description: "UIViewController, Auto Layout, UITableView, UICollectionView, navigation controller ve storyboard/programmatic UI yaklaşımı öğrenilir.",
      lesson: "UIKit, birçok profesyonel iOS projesinde hala aktif kullanılan arayüz çatısıdır. Bu aşama, legacy ve kurumsal projelerde çalışabilmek için güçlü temel sağlar.",
      outcomes: [
        "ViewController yaşam döngüsünü açıklar.",
        "Auto Layout ile responsive ekran kurar.",
        "UITableView veya UICollectionView ile liste tasarlar.",
        "Navigation controller ile sayfa geçişi yapar."
      ],
      exampleCode: "class HomeViewController: UIViewController {\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        view.backgroundColor = .systemBackground\n        title = \"Home\"\n    }\n}",
      checklist: [
        "UIKit ile iki ekranlı bir uygulama oluştur.",
        "Auto Layout constraint ekle.",
        "Liste ekranında örnek verileri göster.",
        "UIKit projesini final portfolyo notu olarak kaydet."
      ],
      project: "UIKit haber listeleme uygulaması",
      dependency: "xcode-tooling"
    },
    {
      id: "swiftui-interface",
      title: "SwiftUI ile Modern Arayüz",
      area: "SwiftUI",
      level: "Orta",
      description: "View, state, binding, ObservableObject, list, form, navigation ve reusable component mantığı öğrenilir.",
      lesson: "SwiftUI, Apple'ın modern deklaratif UI yaklaşımıdır. Bu modül, ekranların veri durumuna göre otomatik güncellenmesini ve daha hızlı prototiplemeyi öğretir.",
      outcomes: [
        "View ve state ilişkisini açıklar.",
        "@State, @Binding ve ObservableObject kullanımını ayırt eder.",
        "NavigationStack ile ekran akışı kurar.",
        "Tekrar kullanılabilir component tasarlar."
      ],
      exampleCode: "struct CounterView: View {\n    @State private var count = 0\n\n    var body: some View {\n        Button(\"Count: \\(count)\") {\n            count += 1\n        }\n    }\n}",
      checklist: [
        "SwiftUI ile tek ekranlı bir sayaç yap.",
        "Form ve List bileşenlerini kullan.",
        "NavigationStack ile detay sayfası ekle.",
        "SwiftUI projesini proje dosyana ekle."
      ],
      project: "SwiftUI alışkanlık takip uygulaması",
      dependency: "uikit-interface"
    },
    {
      id: "navigation-and-ui-design",
      title: "Navigation ve UI/UX Prensipleri",
      area: "UI/UX",
      level: "Orta",
      description: "Tab bar, navigation flow, modal sunum, Human Interface Guidelines ve erişilebilir tasarım mantığı öğrenilir.",
      lesson: "İyi iOS uygulaması sadece çalışan kod değildir; kullanıcının uygulamada kaybolmadan ilerlemesini sağlar. Bu aşama, navigation ve temel UI/UX kararlarını sistemli hale getirir.",
      outcomes: [
        "Tab bar, stack navigation ve modal farkını açıklar.",
        "Apple Human Interface Guidelines mantığını tanır.",
        "Tutarlı boşluk, renk ve tipografi kullanır.",
        "Erişilebilirlik için okunabilir arayüz tasarlar."
      ],
      exampleCode: "TabView {\n    Text(\"Home\")\n        .tabItem { Label(\"Home\", systemImage: \"house\") }\n    Text(\"Profile\")\n        .tabItem { Label(\"Profile\", systemImage: \"person\") }\n}",
      checklist: [
        "Uygulamanın ekran akışını çiz.",
        "Tab bar veya navigation yapısı seç.",
        "HIG üzerinden benzer örnekleri incele.",
        "UI akışını README içinde görselleştir."
      ],
      project: "iOS app flow wireframe ve demo ekranları",
      dependency: "swiftui-interface"
    },
    {
      id: "architecture-patterns",
      title: "Mimari Desenler",
      area: "Architecture",
      level: "Orta",
      description: "MVC, MVVM, Coordinator, dependency injection, SOLID ve clean code yaklaşımı temel düzeyde uygulanır.",
      lesson: "roadmap.sh iOS rotasında mimari desenler önemli bir aşamadır. Bu modül, büyüyen projelerde kodun okunabilir, test edilebilir ve sürdürülebilir kalmasına odaklanır.",
      outcomes: [
        "MVC ve MVVM farkını örnekle açıklar.",
        "ViewModel sorumluluğunu tanımlar.",
        "Coordinator ile navigation sorumluluğunu ayırır.",
        "Dependency injection fikrini temel düzeyde uygular."
      ],
      exampleCode: "final class UserViewModel {\n    private let service: UserService\n\n    init(service: UserService) {\n        self.service = service\n    }\n}",
      checklist: [
        "Mevcut küçük projeyi MVVM'e ayır.",
        "ViewModel içine ekran verisini taşı.",
        "Servis bağımlılığını init ile ver.",
        "Mimari değişimi proje günlüğünde açıkla."
      ],
      project: "MVVM yapılacaklar uygulaması",
      dependency: "navigation-and-ui-design"
    },
    {
      id: "async-reactive",
      title: "Asenkron Programlama ve Reactive Yaklaşım",
      area: "Concurrency",
      level: "İleri",
      description: "async/await, Grand Central Dispatch, Combine, RxSwift fikri, delegate, notification ve closure tabanlı iletişim öğrenilir.",
      lesson: "Modern iOS uygulamaları ağ istekleri, kullanıcı etkileşimleri ve arka plan işlemleriyle sürekli asenkron çalışır. Bu aşama, veri akışını doğru yönetmeyi öğretir.",
      outcomes: [
        "async/await ile bekleyen işlem yazar.",
        "Delegate, closure ve notification farkını açıklar.",
        "Combine veya reactive stream mantığını tanır.",
        "Main thread ve background thread ayrımını bilir."
      ],
      exampleCode: "func loadUsers() async throws -> [User] {\n    let url = URL(string: \"https://example.com/users\")!\n    let (data, _) = try await URLSession.shared.data(from: url)\n    return try JSONDecoder().decode([User].self, from: data)\n}",
      checklist: [
        "async/await kullanan basit veri çekme fonksiyonu yaz.",
        "Closure callback örneği oluştur.",
        "Main thread üzerinde UI güncelleme kuralını not al.",
        "Asenkron örneği proje dosyana ekle."
      ],
      project: "Asenkron kullanıcı listesi demo uygulaması",
      dependency: "architecture-patterns"
    },
    {
      id: "persistence-and-storage",
      title: "Veri Saklama ve Persistence",
      area: "Data",
      level: "İleri",
      description: "UserDefaults, Keychain, FileManager, Core Data, Realm ve temel veri saklama stratejileri öğrenilir.",
      lesson: "iOS uygulamaları kullanıcı tercihlerini, oturum bilgisini ve offline verileri farklı saklama yöntemleriyle yönetir. Bu modül hangi verinin nerede saklanacağını öğretir.",
      outcomes: [
        "UserDefaults ve Keychain kullanım alanlarını ayırt eder.",
        "Core Data entity ve context mantığını açıklar.",
        "Dosya tabanlı saklama ihtiyacını tanır.",
        "Offline veri senaryosu tasarlar."
      ],
      exampleCode: "UserDefaults.standard.set(true, forKey: \"isOnboarded\")\nlet isOnboarded = UserDefaults.standard.bool(forKey: \"isOnboarded\")",
      checklist: [
        "UserDefaults ile kullanıcı tercihi kaydet.",
        "Core Data veya benzeri yapı için veri modeli tasarla.",
        "Offline listeleme senaryosu oluştur.",
        "Persistence demosunu proje dosyana ekle."
      ],
      project: "Offline görev takip uygulaması",
      dependency: "async-reactive"
    },
    {
      id: "networking-apis",
      title: "Networking ve API Kullanımı",
      area: "Networking",
      level: "İleri",
      description: "URLSession, REST API, JSON parsing, Codable, authentication ve hata yönetimi öğrenilir.",
      lesson: "Gerçek uygulamalar çoğu zaman sunucudan veri alır. Bu aşamada API isteği gönderme, JSON verisini modele çevirme ve hata durumlarını kullanıcıya doğru yansıtma çalışılır.",
      outcomes: [
        "URLSession ile GET isteği yapar.",
        "Codable ile JSON parse eder.",
        "HTTP hata durumlarını yönetir.",
        "Basit authentication akışını kavrar."
      ],
      exampleCode: "struct Post: Codable {\n    let id: Int\n    let title: String\n}\n\nlet posts = try JSONDecoder().decode([Post].self, from: data)",
      checklist: [
        "Public API üzerinden veri çek.",
        "JSON response için model oluştur.",
        "Loading ve error state tasarla.",
        "API demo projesini final portfolyo notu olarak ekle."
      ],
      project: "REST API haber okuyucu uygulaması",
      dependency: "persistence-and-storage"
    },
    {
      id: "dependencies-accessibility",
      title: "Paket Yönetimi ve Accessibility",
      area: "Quality",
      level: "İleri",
      description: "Swift Package Manager, CocoaPods/Carthage farkındalığı, reusable libraries, localization ve accessibility kontrolleri öğrenilir.",
      lesson: "roadmap.sh rotasında dependency managers ve accessibility önemli destek başlıklarıdır. Bu modül, dış paketleri bilinçli kullanmayı ve uygulamayı daha kapsayıcı yapmayı hedefler.",
      outcomes: [
        "Swift Package Manager ile paket ekler.",
        "Üçüncü parti kütüphane seçerken riskleri değerlendirir.",
        "VoiceOver ve dynamic type gibi accessibility başlıklarını tanır.",
        "Localization ihtiyacını temel düzeyde açıklar."
      ],
      exampleCode: "Text(\"Welcome\")\n    .font(.headline)\n    .accessibilityLabel(\"Welcome message\")",
      checklist: [
        "Projeye Swift Package Manager ile küçük bir paket ekle.",
        "En az 3 accessibility label kontrolü yap.",
        "Dynamic type ile metin ölçeklenmesini test et.",
        "Erişilebilirlik notlarını README'ye ekle."
      ],
      project: "Accessible iOS settings screen",
      dependency: "networking-apis"
    },
    {
      id: "testing-release",
      title: "Test, Yayınlama ve CI/CD",
      area: "Release",
      level: "İleri",
      description: "Unit test, UI test, TestFlight, App Store Connect, certificates, provisioning, Fastlane ve temel CI/CD mantığı öğrenilir.",
      lesson: "Profesyonel iOS geliştirme, kod yazmakla bitmez. Test etmek, sürüm hazırlamak, dağıtmak ve otomasyon kurmak uygulamanın sürdürülebilirliğini belirler.",
      outcomes: [
        "Unit test ve UI test farkını açıklar.",
        "TestFlight yayın akışını tanır.",
        "Certificate ve provisioning profil mantığını bilir.",
        "Temel CI/CD pipeline amacını açıklar."
      ],
      exampleCode: "func testUserNameIsNotEmpty() {\n    let user = User(name: \"iOSPath\")\n    XCTAssertFalse(user.name.isEmpty)\n}",
      checklist: [
        "Bir ViewModel için unit test yaz.",
        "Basit UI test senaryosu oluştur.",
        "TestFlight ve App Store Connect akışını araştır.",
        "Final portfolyo projesinin README dosyasını tamamla."
      ],
      project: "Test yazılmış final iOS portfolyo projesi",
      dependency: "dependencies-accessibility"
    }
  ],
  curriculum: {
    "apple-getting-started": [
      {
        title: "Apple Platformlarında Uygulama Mantığı",
        content: "iOS uygulamasının kullanıcı arayüzü, veri modeli, cihaz özellikleri ve App Store dağıtımı gibi parçalarla nasıl bütünleştiğini öğren.",
        note: "Hiç bilmiyorsan önce kavramları karıştırmamak yeterli. Bu aşamada ezber değil, büyük resmi anlamak önemli.",
        practice: "Kendi uygulama fikrin için kullanıcı, problem, temel ekran ve final çıktı başlıklarını kısa bir tabloya yaz.",
        question: "Xcode, Swift ve SwiftUI aynı şey midir? Değilse aralarındaki fark nedir?"
      },
      {
        title: "Xcode, Swift ve SwiftUI Rolleri",
        content: "Xcode geliştirme ortamıdır; Swift uygulama dilidir; SwiftUI ise arayüzü deklaratif şekilde kurmanı sağlar.",
        note: "Hiç bilmiyorsan önce kavramları karıştırmamak yeterli. Bu aşamada ezber değil, büyük resmi anlamak önemli.",
        practice: "Bu üç kavramı README dosyanda birer cümleyle açıkla.",
        question: "Xcode, Swift ve SwiftUI aynı şey midir? Değilse aralarındaki fark nedir?"
      },
      {
        title: "Öğrenme Günlüğü Kurulumu",
        content: "Her modülde üretilen küçük çıktıların proje klasöründe düzenli tutulması, dönem sonunda portfolyo kanıtı oluşturur.",
        note: "Hiç bilmiyorsan önce kavramları karıştırmamak yeterli. Bu aşamada ezber değil, büyük resmi anlamak önemli.",
        practice: "iOSPath-learning-log adlı bir klasör oluşturup ilk notunu ekle.",
        question: "Xcode, Swift ve SwiftUI aynı şey midir? Değilse aralarındaki fark nedir?"
      }
    ],
    "app-design-discovery": [
      {
        title: "Problem Tanımı",
        content: "İyi bir uygulama fikri, önce kullanıcının yaşadığı net bir problemi tanımlar. Problem teknik özellik değil, kullanıcı ihtiyacıdır.",
        note: "Kod yazmadan önce problemi doğru tanımlamak, yanlış uygulama geliştirme riskini azaltır.",
        practice: "Uygulamanın çözeceği problemi 'Kullanıcı ... yapmakta zorlanıyor' cümlesiyle yaz.",
        question: "Uygulaman hangi problemi çözüyor ve bu problem kimin için önemli?"
      },
      {
        title: "Hedef Kullanıcı",
        content: "Hedef kullanıcıyı belirlemek, arayüz dili, özellik önceliği ve test senaryolarını daha doğru seçmeni sağlar.",
        note: "Kod yazmadan önce problemi doğru tanımlamak, yanlış uygulama geliştirme riskini azaltır.",
        practice: "Uygulaman için 1 ana kullanıcı profili oluştur: yaş, amaç, sorun ve beklenti.",
        question: "Uygulaman hangi problemi çözüyor ve bu problem kimin için önemli?"
      },
      {
        title: "MVP Özellikleri",
        content: "MVP, uygulamanın ilk çalışan sürümünde mutlaka olması gereken en küçük özellik setidir.",
        note: "Kod yazmadan önce problemi doğru tanımlamak, yanlış uygulama geliştirme riskini azaltır.",
        practice: "Fikrindeki özellikleri 'olmazsa olmaz', 'sonra eklenir' diye iki gruba ayır.",
        question: "Uygulaman hangi problemi çözüyor ve bu problem kimin için önemli?"
      }
    ],
    "app-design-prototype": [
      {
        title: "Ekran Akışı",
        content: "Kullanıcının uygulamada hangi ekrandan hangi ekrana geçeceğini belirlemek, kodlamadan önce belirsizliği azaltır.",
        note: "Prototip profesyonel çizim olmak zorunda değil; kutular ve oklarla ekran akışını anlatması yeterlidir.",
        practice: "Ana ekran, ekleme ekranı ve detay ekranı için basit bir akış çiz.",
        question: "Kullanıcı uygulamada ilk açılıştan hedefe ulaşana kadar hangi ekranlardan geçiyor?"
      },
      {
        title: "Wireframe Hazırlama",
        content: "Wireframe, renk ve detaydan önce ekrandaki içerik yerleşimini gösteren düşük çözünürlüklü taslaktır.",
        note: "Prototip profesyonel çizim olmak zorunda değil; kutular ve oklarla ekran akışını anlatması yeterlidir.",
        practice: "Her ana ekran için başlık, buton, liste ve form alanlarını yerleştir.",
        question: "Kullanıcı uygulamada ilk açılıştan hedefe ulaşana kadar hangi ekranlardan geçiyor?"
      },
      {
        title: "İterasyon",
        content: "İlk tasarım genellikle final değildir. Kullanıcı geri bildirimiyle gereksiz alanlar çıkarılır, eksikler eklenir.",
        note: "Prototip profesyonel çizim olmak zorunda değil; kutular ve oklarla ekran akışını anlatması yeterlidir.",
        practice: "Bir kişiden tasarımın anlaşılır olup olmadığını sor ve aldığın geri bildirimi not et.",
        question: "Kullanıcı uygulamada ilk açılıştan hedefe ulaşana kadar hangi ekranlardan geçiyor?"
      }
    ],
    "swiftui-explore-xcode": [
      {
        title: "Yeni SwiftUI Projesi",
        content: "Xcode'da SwiftUI App template'i seçildiğinde başlangıç dosyaları, app entry point ve ContentView otomatik oluşur.",
        note: "Xcode ilk başta karmaşık görünebilir. Sadece dosya listesi, kod alanı ve preview bölümünü tanıman başlangıç için yeterli.",
        practice: "Yeni proje oluşturup ContentView içinde görünen Text bileşenini değiştir.",
        question: "ContentView dosyası ne işe yarar?"
      },
      {
        title: "Preview Kullanımı",
        content: "Preview, uygulamayı her seferinde simulator açmadan arayüz değişikliklerini hızlıca görmeni sağlar.",
        note: "Xcode ilk başta karmaşık görünebilir. Sadece dosya listesi, kod alanı ve preview bölümünü tanıman başlangıç için yeterli.",
        practice: "Preview ekranında en az 3 farklı metin/stil değişikliğini dene.",
        question: "ContentView dosyası ne işe yarar?"
      },
      {
        title: "SwiftUI Syntax Okuma",
        content: "SwiftUI'da body bir View döndürür; modifier'lar görünümü zincirleme biçimde düzenler.",
        note: "Xcode ilk başta karmaşık görünebilir. Sadece dosya listesi, kod alanı ve preview bölümünü tanıman başlangıç için yeterli.",
        practice: "Text bileşenine padding, font ve foregroundStyle modifier'ları ekle.",
        question: "ContentView dosyası ne işe yarar?"
      }
    ],
    "swiftui-views-structures": [
      {
        title: "Struct ile View Tanımlama",
        content: "SwiftUI ekranları genellikle struct olarak tanımlanır ve View protokolünü uygular.",
        note: "SwiftUI ekranları küçük yapı taşlarından oluşur. Her şeyi tek ekrana yazmak yerine küçük view parçaları düşün.",
        practice: "WeatherCard adlı yeni bir SwiftUI view oluştur.",
        question: "Bir custom view neden tekrar kullanılabilir olmalıdır?"
      },
      {
        title: "Property ile Özelleştirme",
        content: "Bir view'a dışarıdan veri göndererek aynı bileşeni farklı içeriklerle tekrar kullanabilirsin.",
        note: "SwiftUI ekranları küçük yapı taşlarından oluşur. Her şeyi tek ekrana yazmak yerine küçük view parçaları düşün.",
        practice: "WeatherCard içine day ve temperature property'leri ekle.",
        question: "Bir custom view neden tekrar kullanılabilir olmalıdır?"
      },
      {
        title: "Component Tekrar Kullanımı",
        content: "Tekrarlanan arayüz parçalarını küçük component'lere ayırmak kodu okunabilir hale getirir.",
        note: "SwiftUI ekranları küçük yapı taşlarından oluşur. Her şeyi tek ekrana yazmak yerine küçük view parçaları düşün.",
        practice: "Aynı kart component'ini 3 farklı gün için ekranda göster.",
        question: "Bir custom view neden tekrar kullanılabilir olmalıdır?"
      }
    ],
    "swiftui-layout-style": [
      {
        title: "Stack Yapıları",
        content: "VStack dikey, HStack yatay, ZStack üst üste yerleşim sağlar. SwiftUI layout mantığının temelidir.",
        note: "Layout öğrenirken önce ekrandaki öğeleri dikey mi yatay mı yerleştireceğine karar ver.",
        practice: "Bir başlık, açıklama ve butonu VStack içinde hizala.",
        question: "VStack ve HStack arasındaki fark nedir?"
      },
      {
        title: "Modifier Zinciri",
        content: "font, padding, background, cornerRadius ve foregroundStyle gibi modifier'lar görünümün stilini belirler.",
        note: "Layout öğrenirken önce ekrandaki öğeleri dikey mi yatay mı yerleştireceğine karar ver.",
        practice: "Bir kart görünümü oluşturup en az 5 modifier ile düzenle.",
        question: "VStack ve HStack arasındaki fark nedir?"
      },
      {
        title: "Görsel Hiyerarşi",
        content: "Önemli metin daha belirgin, yardımcı metin daha sakin görünmelidir. Bu karar kullanıcı deneyimini güçlendirir.",
        note: "Layout öğrenirken önce ekrandaki öğeleri dikey mi yatay mı yerleştireceğine karar ver.",
        practice: "Başlık, alt açıklama ve durum etiketini farklı ağırlıklarla tasarla.",
        question: "VStack ve HStack arasındaki fark nedir?"
      }
    ],
    "swiftui-buttons-state": [
      {
        title: "Button Action",
        content: "Button, kullanıcı etkileşimini yakalar ve action bloğu içinde bir işlemi tetikler.",
        note: "State, ekranda değişebilen bilgidir. Bir değer değişince SwiftUI ekranı otomatik yeniler.",
        practice: "Butona basıldığında ekranda görünen metni değiştiren bir örnek yap.",
        question: "@State değişince ekranda ne olur?"
      },
      {
        title: "@State Mantığı",
        content: "@State, view içinde değişen küçük yerel verileri tutar. Değer değişince arayüz otomatik güncellenir.",
        note: "State, ekranda değişebilen bilgidir. Bir değer değişince SwiftUI ekranı otomatik yeniler.",
        practice: "Bir sayaç uygulaması yap ve count değerini @State ile sakla.",
        question: "@State değişince ekranda ne olur?"
      },
      {
        title: "Koşullu Arayüz",
        content: "if yapılarıyla kullanıcının yaptığı seçime göre farklı bileşenler gösterebilirsin.",
        note: "State, ekranda değişebilen bilgidir. Bir değer değişince SwiftUI ekranı otomatik yeniler.",
        practice: "Beğenildi/beğenilmedi durumuna göre buton rengini değiştir.",
        question: "@State değişince ekranda ne olur?"
      }
    ],
    "swiftui-lists-textfields": [
      {
        title: "TextField ile Veri Alma",
        content: "TextField, kullanıcının metin girmesini sağlar ve genellikle @State değişkenine bağlanır.",
        note: "Kullanıcıdan veri almak ve listelemek, çoğu uygulamanın temel davranışıdır.",
        practice: "Kullanıcıdan not başlığı alan bir TextField oluştur.",
        question: "TextField ile alınan veri ekranda nasıl listeye dönüşür?"
      },
      {
        title: "List ve ForEach",
        content: "List, koleksiyon verilerini ekranda düzenli biçimde göstermek için kullanılır.",
        note: "Kullanıcıdan veri almak ve listelemek, çoğu uygulamanın temel davranışıdır.",
        practice: "Girilen notları bir array içinde tutup List ile göster.",
        question: "TextField ile alınan veri ekranda nasıl listeye dönüşür?"
      },
      {
        title: "Basit Form Akışı",
        content: "Form ekranları kullanıcı girdisini alır, doğrular ve uygulama verisine dönüştürür.",
        note: "Kullanıcıdan veri almak ve listelemek, çoğu uygulamanın temel davranışıdır.",
        practice: "Boş not eklenmesini engelleyen küçük bir kontrol yaz.",
        question: "TextField ile alınan veri ekranda nasıl listeye dönüşür?"
      }
    ],
    "data-modeling": [
      {
        title: "Model Nedir?",
        content: "Model, uygulamanın kullandığı veriyi düzenli ve anlamlı şekilde temsil eden yapıdır.",
        note: "Model, uygulamanın hafızasındaki nesnedir. Ekrandan bağımsız düşünülür.",
        practice: "Habit veya JournalEntry adlı bir model struct oluştur.",
        question: "Bir uygulamada model neden arayüzden ayrı düşünülmelidir?"
      },
      {
        title: "Computed Property",
        content: "Computed property, var olan verilerden türetilmiş yeni bir değer hesaplar.",
        note: "Model, uygulamanın hafızasındaki nesnedir. Ekrandan bağımsız düşünülür.",
        practice: "count değerine göre isStarted adlı computed property ekle.",
        question: "Bir uygulamada model neden arayüzden ayrı düşünülmelidir?"
      },
      {
        title: "Model Testi",
        content: "Veri modeli doğru çalışıyorsa arayüz değişse bile uygulama mantığı sağlam kalır.",
        note: "Model, uygulamanın hafızasındaki nesnedir. Ekrandan bağımsız düşünülür.",
        practice: "Modelin boş başlık kabul etmemesi için küçük bir test senaryosu yaz.",
        question: "Bir uygulamada model neden arayüzden ayrı düşünülmelidir?"
      }
    ],
    "app-dev-views-storage": [
      {
        title: "Veri Girişi Ekranı",
        content: "Gerçek uygulama, kullanıcıdan veri alır ve bu veriyi anlamlı bir modele dönüştürür.",
        note: "Veri saklama, uygulama kapansa bile bilgilerin kaybolmamasını sağlar.",
        practice: "Metin girişi ve kaydet butonu olan bir ekran oluştur.",
        question: "Kalıcı veri ile geçici ekran verisi arasındaki fark nedir?"
      },
      {
        title: "SwiftData / Kalıcı Veri",
        content: "Kalıcı veri, uygulama kapanıp açılsa bile bilgilerin korunmasını sağlar. SwiftData modern Apple yaklaşımıdır.",
        note: "Veri saklama, uygulama kapansa bile bilgilerin kaybolmamasını sağlar.",
        practice: "Bir modelin SwiftData ile saklanabileceği alanları belirle.",
        question: "Kalıcı veri ile geçici ekran verisi arasındaki fark nedir?"
      },
      {
        title: "Custom Layout View",
        content: "Kayıtları göstermek için özel kartlar veya liste hücreleri tasarlamak kullanıcı deneyimini iyileştirir.",
        note: "Veri saklama, uygulama kapansa bile bilgilerin kaybolmamasını sağlar.",
        practice: "Kaydedilen her öğeyi kart görünümünde göster.",
        question: "Kalıcı veri ile geçici ekran verisi arasındaki fark nedir?"
      }
    ],
    "app-dev-ux-features": [
      {
        title: "Boş Durum Tasarımı",
        content: "Liste boşsa kullanıcıya ne yapması gerektiğini anlatan sakin bir boş durum ekranı gerekir.",
        note: "İyi kullanıcı deneyimi, kullanıcının ne yapacağını tahmin edebilmesini sağlar.",
        practice: "Henüz kayıt yok mesajı ve ekleme butonu içeren bir boş durum tasarla.",
        question: "Boş durum ekranı kullanıcıya ne anlatmalıdır?"
      },
      {
        title: "Hata ve Geri Bildirim",
        content: "Kullanıcı hatalı veya eksik işlem yaptığında arayüz anlaşılır geri bildirim vermelidir.",
        note: "İyi kullanıcı deneyimi, kullanıcının ne yapacağını tahmin edebilmesini sağlar.",
        practice: "Boş form gönderildiğinde uyarı metni göster.",
        question: "Boş durum ekranı kullanıcıya ne anlatmalıdır?"
      },
      {
        title: "Accessibility",
        content: "Erişilebilirlik, uygulamanın daha fazla kullanıcı tarafından rahat kullanılmasını sağlar.",
        note: "İyi kullanıcı deneyimi, kullanıcının ne yapacağını tahmin edebilmesini sağlar.",
        practice: "Önemli buton ve metinlere accessibilityLabel ekle.",
        question: "Boş durum ekranı kullanıcıya ne anlatmalıdır?"
      }
    ],
    "machine-learning-ai": [
      {
        title: "Akıllı Özellik Fikri",
        content: "AI özelliği, uygulamanın ana amacına değer katmalı; sadece gösterişli olduğu için eklenmemelidir.",
        note: "Bu ileri seviye bir keşif alanıdır. Başlangıçta sadece hangi problemi akıllı hale getireceğini düşünmen yeterli.",
        practice: "Uygulamana gerçekten fayda sağlayacak bir AI özelliği öner.",
        question: "Eklemek istediğin AI özelliği kullanıcıya hangi somut faydayı sağlar?"
      },
      {
        title: "Apple Framework Seçimi",
        content: "Natural Language metin, Vision görsel, Core ML ise model entegrasyonu için kullanılabilir.",
        note: "Bu ileri seviye bir keşif alanıdır. Başlangıçta sadece hangi problemi akıllı hale getireceğini düşünmen yeterli.",
        practice: "Önerdiğin özellik için hangi framework'ün uygun olduğunu yaz.",
        question: "Eklemek istediğin AI özelliği kullanıcıya hangi somut faydayı sağlar?"
      },
      {
        title: "Kullanıcı Değeri",
        content: "Akıllı özellik kullanıcının karar vermesini, üretmesini veya anlamasını kolaylaştırmalıdır.",
        note: "Bu ileri seviye bir keşif alanıdır. Başlangıçta sadece hangi problemi akıllı hale getireceğini düşünmen yeterli.",
        practice: "AI özelliğinin kullanıcıya sağlayacağı 3 faydayı listele.",
        question: "Eklemek istediğin AI özelliği kullanıcıya hangi somut faydayı sağlar?"
      }
    ],
    "spatial-computing": [
      {
        title: "Spatial Deneyim Nedir?",
        content: "Spatial computing, uygulamayı yalnızca düz ekranda değil, kullanıcının çevresel deneyimi içinde düşünür.",
        note: "Spatial computing bugün ileri seviye görünebilir; burada amaç fikir geliştirmek ve Apple ekosisteminin yönünü tanımaktır.",
        practice: "Mevcut uygulama fikrinin spatial versiyonunu tek paragrafta anlat.",
        question: "Bir iOS uygulaması spatial deneyime dönüşürse kullanıcıya ne değişik deneyim sunar?"
      },
      {
        title: "visionOS Farkındalığı",
        content: "visionOS, SwiftUI bilgisini yeni pencere, hacim ve 3D içerik deneyimleriyle genişletir.",
        note: "Spatial computing bugün ileri seviye görünebilir; burada amaç fikir geliştirmek ve Apple ekosisteminin yönünü tanımaktır.",
        practice: "Uygulamada hangi ekranın spatial deneyime uygun olduğunu belirle.",
        question: "Bir iOS uygulaması spatial deneyime dönüşürse kullanıcıya ne değişik deneyim sunar?"
      },
      {
        title: "3D İçerik Senaryosu",
        content: "3D içerik yalnızca dekorasyon değil, kullanıcının bilgiyi daha iyi anlamasına hizmet etmelidir.",
        note: "Spatial computing bugün ileri seviye görünebilir; burada amaç fikir geliştirmek ve Apple ekosisteminin yönünü tanımaktır.",
        practice: "Bir 3D kullanım senaryosu çiz veya yaz.",
        question: "Bir iOS uygulaması spatial deneyime dönüşürse kullanıcıya ne değişik deneyim sunar?"
      }
    ],
    "app-distribution": [
      {
        title: "TestFlight Mantığı",
        content: "TestFlight, uygulamayı App Store'a çıkmadan önce test kullanıcılarıyla paylaşmayı sağlar.",
        note: "Dağıtım aşaması, projeyi başkasının anlayıp deneyebileceği hale getirme sürecidir.",
        practice: "TestFlight sürecinin 4 adımını araştırıp not al.",
        question: "Bir projeyi teslim edilebilir hale getirmek için kod dışında neler gerekir?"
      },
      {
        title: "App Store Hazırlığı",
        content: "Uygulama adı, açıklama, ekran görüntüleri ve sürüm notları yayın sürecinin parçasıdır.",
        note: "Dağıtım aşaması, projeyi başkasının anlayıp deneyebileceği hale getirme sürecidir.",
        practice: "Final projen için uygulama açıklaması ve 1.0 sürüm notu yaz.",
        question: "Bir projeyi teslim edilebilir hale getirmek için kod dışında neler gerekir?"
      },
      {
        title: "Portfolyo Sunumu",
        content: "Teslim edilebilir proje, yalnızca koddan değil; README, ekran görüntüsü, açıklama ve öğrenme sürecinden oluşur.",
        note: "Dağıtım aşaması, projeyi başkasının anlayıp deneyebileceği hale getirme sürecidir.",
        practice: "Final README dosyasını proje amacı, teknoloji ve ekran görüntüleriyle tamamla.",
        question: "Bir projeyi teslim edilebilir hale getirmek için kod dışında neler gerekir?"
      }
    ]
  },
  resources: [
    {
      title: "Develop in Swift Tutorials",
      area: "Getting Started",
      description: "Apple'ın başlangıç seviyesinden uygulama dağıtımına kadar uzanan resmi Swift, Xcode ve SwiftUI eğitim akışı.",
      url: "https://developer.apple.com/tutorials/develop-in-swift/"
    },
    {
      title: "Stanford CS193p: Developing Apps for iOS",
      area: "Getting Started",
      description: "SwiftUI ile iPhone ve iPad uygulaması geliştirmeyi ödevler, demo kodlar ve ders akışıyla öğreten Stanford dersi.",
      url: "https://cs193p.stanford.edu/about-cs193p"
    },
    {
      title: "roadmap.sh iOS Roadmap",
      area: "Getting Started",
      description: "iOS geliştiriciliğinde hangi başlıkların hangi sırayla öğrenilebileceğini gösteren pratik yol haritası.",
      url: "https://roadmap.sh/ios"
    },
    {
      title: "Human Interface Guidelines",
      area: "App Design",
      description: "Apple platformları için görsel hiyerarşi, tutarlılık, erişilebilirlik ve kullanıcı deneyimi kararlarında temel tasarım kaynağı.",
      url: "https://developer.apple.com/design/human-interface-guidelines/"
    },
    {
      title: "Apple Design Resources",
      area: "App Design",
      description: "iOS arayüz tasarımlarında kullanılabilecek Apple tasarım şablonları, UI kitleri ve sistem kaynakları.",
      url: "https://developer.apple.com/design/resources/"
    },
    {
      title: "The Swift Programming Language",
      area: "Swift",
      description: "Swift dilinin resmi ve en güvenilir referansı; syntax, optionals, generics, protocol ve concurrency başlıklarını kapsar.",
      url: "https://www.swift.org/documentation/tspl/"
    },
    {
      title: "A Swift Tour",
      area: "Swift",
      description: "Swift diline hızlı giriş yapmak için değişkenler, koleksiyonlar, fonksiyonlar, class ve enum örneklerini içeren resmi tur.",
      url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/"
    },
    {
      title: "SwiftLee",
      area: "Swift",
      description: "Swift, SwiftUI, concurrency, Xcode ve debugging konularında düzenli güncellenen ileri seviye pratik yazılar.",
      url: "https://www.avanderlee.com/"
    },
    {
      title: "Xcode Documentation",
      area: "Xcode",
      description: "Xcode, simulator, preview, debugging ve geliştirme araçlarının resmi Apple dokümantasyonu.",
      url: "https://developer.apple.com/documentation/xcode"
    },
    {
      title: "Apple Developer Videos: Swift",
      area: "Xcode",
      description: "WWDC oturumları üzerinden Swift, Xcode, SwiftUI, SwiftData, test ve performans konularını takip etmek için güçlü video arşivi.",
      url: "https://developer.apple.com/videos/swift/"
    },
    {
      title: "SwiftUI Documentation",
      area: "SwiftUI",
      description: "SwiftUI view, layout, navigation, state, gesture, accessibility ve platform entegrasyonu için resmi dokümantasyon.",
      url: "https://developer.apple.com/documentation/swiftui"
    },
    {
      title: "100 Days of SwiftUI",
      area: "SwiftUI",
      description: "Paul Hudson tarafından hazırlanan, her gün küçük görevlerle SwiftUI pratiği yaptıran proje tabanlı öğrenme serisi.",
      url: "https://www.hackingwithswift.com/100/swiftui"
    },
    {
      title: "Swiftful Thinking",
      area: "SwiftUI",
      description: "SwiftUI kavramlarını sade örneklerle anlatan, özellikle başlangıç ve orta seviye geliştiriciler için faydalı video içerikleri.",
      url: "https://www.swiftful-thinking.com/"
    },
    {
      title: "objc.io",
      area: "Architecture",
      description: "SwiftUI, app architecture, advanced Swift ve Core Data gibi konularda derin teknik kitaplar, videolar ve makaleler sunan kaynak.",
      url: "https://www.objc.io/"
    },
    {
      title: "Swift Talk: SwiftUI",
      area: "Architecture",
      description: "SwiftUI ve uygulama mimarisi konularını canlı kodlama ve açıklamalı örneklerle ele alan objc.io video serisi.",
      url: "https://talk.objc.io/collections/swiftui"
    },
    {
      title: "UIKit Documentation",
      area: "UIKit",
      description: "UIViewController, navigation, table view, collection view ve klasik iOS arayüz geliştirme için resmi kaynak.",
      url: "https://developer.apple.com/documentation/uikit"
    },
    {
      title: "Use Your Loaf",
      area: "UIKit",
      description: "UIKit, Auto Layout, SwiftUI, Xcode ve erişilebilirlik konularında kısa ama uygulamaya dönük teknik yazılar.",
      url: "https://useyourloaf.com/"
    },
    {
      title: "SwiftData Documentation",
      area: "Data Modeling",
      description: "Modern Apple uygulamalarında model oluşturma, veri saklama ve kalıcı veri yönetimi için SwiftData dokümantasyonu.",
      url: "https://developer.apple.com/documentation/swiftdata"
    },
    {
      title: "Core Data Documentation",
      area: "Data Modeling",
      description: "Daha büyük ve ilişkisel veri yapılarında yerel veri saklama, modelleme ve nesne grafiği yönetimi için resmi kaynak.",
      url: "https://developer.apple.com/documentation/coredata"
    },
    {
      title: "URLSession Documentation",
      area: "Networking",
      description: "HTTP istekleri, veri indirme, upload işlemleri ve ağ bağlantısı yönetimi için resmi Apple dokümantasyonu.",
      url: "https://developer.apple.com/documentation/foundation/urlsession"
    },
    {
      title: "Donny Wals",
      area: "Networking",
      description: "Swift concurrency, networking, Combine, Core Data ve SwiftUI konularını gerçek uygulama örnekleriyle açıklayan pratik blog.",
      url: "https://www.donnywals.com/"
    },
    {
      title: "Swift Concurrency",
      area: "Concurrency",
      description: "async/await, Task, actor ve yapılandırılmış eşzamanlılık konularını açıklayan resmi Swift dil bölümü.",
      url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/"
    },
    {
      title: "Embracing Swift Concurrency",
      area: "Concurrency",
      description: "Apple'ın modern Swift concurrency yaklaşımını, main actor, task ve veri paylaşımı açısından anlattığı WWDC oturumu.",
      url: "https://developer.apple.com/videos/play/wwdc2025/268/"
    },
    {
      title: "XCTest Documentation",
      area: "Testing",
      description: "Unit test ve UI test yazmak, test hedefleri oluşturmak ve uygulama davranışını doğrulamak için resmi test frameworkü.",
      url: "https://developer.apple.com/documentation/xctest"
    },
    {
      title: "Swift Testing",
      area: "Testing",
      description: "Swift projelerinde daha modern test yazımı için Apple'ın yeni test frameworkü ve dokümantasyonu.",
      url: "https://developer.apple.com/documentation/testing"
    },
    {
      title: "Accessibility for Apple Platforms",
      area: "Accessibility",
      description: "VoiceOver, Dynamic Type, erişilebilir etiketler ve kapsayıcı arayüz geliştirme için resmi Apple erişilebilirlik kaynağı.",
      url: "https://developer.apple.com/accessibility/"
    },
    {
      title: "App Store Connect",
      area: "App Distribution",
      description: "Uygulama sürümleri, mağaza bilgileri, TestFlight, analizler ve yayın süreci için Apple'ın dağıtım platformu.",
      url: "https://developer.apple.com/app-store-connect/"
    },
    {
      title: "TestFlight",
      area: "App Distribution",
      description: "Uygulamayı App Store'a çıkmadan önce test kullanıcılarına dağıtmak ve geri bildirim almak için kullanılan Apple servisi.",
      url: "https://developer.apple.com/testflight/"
    },
    {
      title: "Core ML Documentation",
      area: "Machine Learning and AI",
      description: "Makine öğrenmesi modellerini Apple platformlarındaki uygulamalara entegre etmek için resmi Core ML dokümantasyonu.",
      url: "https://developer.apple.com/documentation/coreml"
    },
    {
      title: "Create ML",
      area: "Machine Learning and AI",
      description: "Apple ekosisteminde model eğitimi, veri hazırlama ve uygulamaya uygun ML modeli üretme süreci için kaynak.",
      url: "https://developer.apple.com/machine-learning/create-ml/"
    },
    {
      title: "visionOS Documentation",
      area: "Spatial Computing",
      description: "Apple Vision Pro, spatial app tasarımı ve visionOS geliştirme süreci için resmi geliştirici kaynakları.",
      url: "https://developer.apple.com/visionos/"
    },
    {
      title: "About READMEs",
      area: "Portfolio",
      description: "GitHub projelerinde README dosyasının nasıl konumlandığını ve projenin nasıl anlaşılır sunulacağını açıklayan kaynak.",
      url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
    }
  ],
  questions: [
    {
      category: "Swift",
      level: "Başlangıç",
      title: "Swift dilinde let ve var arasındaki fark nedir?",
      answer: "let sabit değerler için kullanılır ve atandıktan sonra değiştirilemez. var ise çalışma sırasında değeri değişebilecek değişkenler için kullanılır."
    },
    {
      category: "Swift",
      level: "Başlangıç",
      title: "Optional nedir ve neden Swift'te önemlidir?",
      answer: "Optional, bir değerin var olabileceğini veya nil olabileceğini açıkça belirtir. Swift bu yapı sayesinde nil kaynaklı hataları derleme aşamasında daha görünür hale getirir."
    },
    {
      category: "Swift",
      level: "Başlangıç",
      title: "if let ile guard let arasındaki fark nedir?",
      answer: "if let optional değeri belirli bir blok içinde açar. guard let ise değer yoksa fonksiyondan erken çıkmayı sağlar ve açılan değeri fonksiyonun devamında kullanılabilir hale getirir."
    },
    {
      category: "Swift",
      level: "Başlangıç",
      title: "Array, Set ve Dictionary hangi durumlarda kullanılır?",
      answer: "Array sıralı veri için, Set benzersiz değerler için, Dictionary ise anahtar-değer ilişkisiyle veri saklamak için kullanılır."
    },
    {
      category: "Swift",
      level: "Orta",
      title: "Struct ve class arasındaki en temel fark nedir?",
      answer: "Struct value type olduğu için kopyalanarak taşınır. Class reference type olduğu için aynı nesneye birden fazla referans verilebilir."
    },
    {
      category: "Swift",
      level: "Orta",
      title: "Protocol ne işe yarar?",
      answer: "Protocol, bir tipin sahip olması gereken özellik ve metotları tanımlar. Farklı tiplerin ortak davranış göstermesini sağlar."
    },
    {
      category: "Swift",
      level: "Orta",
      title: "Extension hangi amaçla kullanılır?",
      answer: "Extension, mevcut bir tipe yeni özellik veya metot eklemek için kullanılır. Böylece ana sınıf veya struct dosyasını büyütmeden kod daha düzenli tutulabilir."
    },
    {
      category: "Swift",
      level: "Orta",
      title: "Closure nedir?",
      answer: "Closure, değişken gibi saklanabilen veya parametre olarak gönderilebilen kod bloğudur. Callback, animasyon ve asenkron işlem senaryolarında sık kullanılır."
    },
    {
      category: "Swift",
      level: "Orta",
      title: "Enum hangi durumlarda tercih edilir?",
      answer: "Enum, sınırlı sayıdaki durumu güvenli şekilde temsil etmek için tercih edilir. Örneğin ekran durumu, kullanıcı rolü veya ağ isteği sonucu enum ile modellenebilir."
    },
    {
      category: "Swift",
      level: "İleri",
      title: "Generics ne sağlar?",
      answer: "Generics, farklı tiplerle çalışabilen tekrar kullanılabilir kod yazmayı sağlar. Tip güvenliğini korurken aynı mantığı birden fazla veri tipi için kullanmaya imkan verir."
    },
    {
      category: "Swift",
      level: "İleri",
      title: "ARC nedir?",
      answer: "ARC, Automatic Reference Counting anlamına gelir. Swift, class nesnelerinin bellekte tutulup tutulmayacağını referans sayısına göre otomatik yönetir."
    },
    {
      category: "Swift",
      level: "İleri",
      title: "weak, unowned ve strong referanslar arasındaki fark nedir?",
      answer: "strong referans nesneyi bellekte tutar. weak referans nesneyi sahiplenmez ve nil olabilir. unowned ise sahiplenmez ancak nil olmayacağı varsayılır; yanlış kullanımda çökme riski vardır."
    },
    {
      category: "Xcode",
      level: "Başlangıç",
      title: "Xcode ne işe yarar?",
      answer: "Xcode, Apple platformları için uygulama geliştirme, çalıştırma, test etme, hata ayıklama ve dağıtma süreçlerini yöneten ana geliştirme ortamıdır."
    },
    {
      category: "Xcode",
      level: "Başlangıç",
      title: "Simulator ne için kullanılır?",
      answer: "Simulator, fiziksel cihaz olmadan iPhone, iPad veya farklı ekran boyutlarında uygulamayı test etmeyi sağlar."
    },
    {
      category: "Xcode",
      level: "Başlangıç",
      title: "Breakpoint ne işe yarar?",
      answer: "Breakpoint, kodun belirli bir satırda durmasını sağlar. Bu sırada değişken değerleri, çağrı sırası ve hata nedeni daha net incelenebilir."
    },
    {
      category: "Xcode",
      level: "Başlangıç",
      title: "Debug console hangi amaçla kullanılır?",
      answer: "Debug console, print çıktılarının, hata mesajlarının ve çalışma zamanı bilgilerinin görülmesini sağlar."
    },
    {
      category: "Xcode",
      level: "Orta",
      title: "Scheme nedir?",
      answer: "Scheme, uygulamanın hangi target ile, hangi yapılandırmada ve hangi test ayarlarıyla çalıştırılacağını belirler."
    },
    {
      category: "Xcode",
      level: "Orta",
      title: "SwiftUI Preview ne sağlar?",
      answer: "Preview, arayüz değişikliklerini uygulamayı tam olarak çalıştırmadan hızlıca görmeyi sağlar. Tasarım denemelerini hızlandırır."
    },
    {
      category: "Xcode",
      level: "Orta",
      title: "Instruments hangi amaçla kullanılır?",
      answer: "Instruments, performans, bellek kullanımı, CPU yükü ve olası memory leak problemlerini analiz etmek için kullanılır."
    },
    {
      category: "Xcode",
      level: "İleri",
      title: "Code signing neden gereklidir?",
      answer: "Code signing, uygulamanın güvenilir bir geliştirici hesabı tarafından imzalandığını gösterir. Cihazda çalıştırma ve App Store dağıtımı için gereklidir."
    },
    {
      category: "SwiftUI",
      level: "Başlangıç",
      title: "SwiftUI nedir?",
      answer: "SwiftUI, Apple platformlarında deklaratif yaklaşımla arayüz geliştirmek için kullanılan modern frameworktür."
    },
    {
      category: "SwiftUI",
      level: "Başlangıç",
      title: "View nedir?",
      answer: "View, SwiftUI arayüzünün temel yapı taşıdır. Ekranda görünen metin, buton, liste ve kart gibi parçalar view olarak tanımlanır."
    },
    {
      category: "SwiftUI",
      level: "Başlangıç",
      title: "body property'si neyi temsil eder?",
      answer: "body, bir SwiftUI view'ın ekranda nasıl görüneceğini tanımlar. State değiştiğinde body yeniden hesaplanabilir."
    },
    {
      category: "SwiftUI",
      level: "Başlangıç",
      title: "Modifier nedir?",
      answer: "Modifier, bir view'ın görünümünü veya davranışını değiştiren fonksiyon zinciridir. font, padding, background ve cornerRadius buna örnektir."
    },
    {
      category: "SwiftUI",
      level: "Başlangıç",
      title: "VStack, HStack ve ZStack farkı nedir?",
      answer: "VStack elemanları dikey, HStack yatay, ZStack ise üst üste yerleştirir. Arayüz düzeni bu container'larla kurulur."
    },
    {
      category: "SwiftUI",
      level: "Orta",
      title: "@State ne amaçla kullanılır?",
      answer: "@State, bir view içinde değişebilen yerel durum bilgisini tutar. Değer değiştiğinde ilgili arayüz otomatik olarak güncellenir."
    },
    {
      category: "SwiftUI",
      level: "Orta",
      title: "@Binding ne işe yarar?",
      answer: "@Binding, child view'ın parent view'daki state değerini doğrudan okuyup değiştirmesini sağlar. Form ve küçük component tasarımlarında sık kullanılır."
    },
    {
      category: "SwiftUI",
      level: "Orta",
      title: "@StateObject ve @ObservedObject farkı nedir?",
      answer: "@StateObject nesnenin yaşam döngüsünü view içinde başlatıp sahiplenir. @ObservedObject ise dışarıdan gelen gözlemlenebilir nesneyi takip eder."
    },
    {
      category: "SwiftUI",
      level: "Orta",
      title: "@EnvironmentObject ne zaman kullanılır?",
      answer: "@EnvironmentObject, birçok view tarafından ortak kullanılan veri modelini her ekrana tek tek parametre geçmeden paylaşmak için kullanılır."
    },
    {
      category: "SwiftUI",
      level: "Orta",
      title: "NavigationStack ne işe yarar?",
      answer: "NavigationStack, SwiftUI uygulamalarında ekranlar arası ileri-geri geçişleri yönetir ve detay sayfalarına geçiş akışı kurar."
    },
    {
      category: "SwiftUI",
      level: "Orta",
      title: "List ve ForEach birlikte nasıl kullanılır?",
      answer: "List ekranda liste görünümü sağlar. ForEach ise veri koleksiyonundaki her elemanı ayrı bir view'a dönüştürür."
    },
    {
      category: "SwiftUI",
      level: "Orta",
      title: "Form hangi ekranlarda tercih edilir?",
      answer: "Form, kullanıcıdan düzenli veri almak için kullanılır. Ayarlar, kayıt, profil düzenleme ve filtre ekranları buna örnektir."
    },
    {
      category: "SwiftUI",
      level: "İleri",
      title: "Identifiable neden önemlidir?",
      answer: "Identifiable, liste içindeki elemanların benzersiz şekilde tanınmasını sağlar. SwiftUI bu sayede hangi öğenin değiştiğini daha doğru takip eder."
    },
    {
      category: "SwiftUI",
      level: "İleri",
      title: "View lifecycle SwiftUI'da nasıl düşünülmelidir?",
      answer: "SwiftUI'da view'lar kalıcı nesneler gibi değil, state'e göre yeniden üretilebilen açıklamalar gibi düşünülmelidir. Kalıcı veri için ayrı model veya state yapıları kullanılmalıdır."
    },
    {
      category: "SwiftUI",
      level: "İleri",
      title: "LazyVStack ve VStack farkı nedir?",
      answer: "VStack içindeki tüm view'ları hemen oluşturur. LazyVStack ise ihtiyaç oldukça oluşturduğu için uzun listelerde performans açısından daha uygundur."
    },
    {
      category: "UIKit",
      level: "Başlangıç",
      title: "UIKit nedir?",
      answer: "UIKit, iOS uygulamalarında klasik ve güçlü arayüz geliştirme için kullanılan frameworktür. Birçok kurumsal projede hala aktif olarak kullanılır."
    },
    {
      category: "UIKit",
      level: "Başlangıç",
      title: "UIViewController ne işe yarar?",
      answer: "UIViewController, bir ekranın görünümünü ve kullanıcı etkileşimlerini yönetir. UIKit mimarisinde ekran davranışının merkezindedir."
    },
    {
      category: "UIKit",
      level: "Orta",
      title: "viewDidLoad ne zaman çalışır?",
      answer: "View belleğe yüklendiğinde bir kez çalışır. İlk kurulum, veri bağlama ve arayüz hazırlığı için kullanılır."
    },
    {
      category: "UIKit",
      level: "Orta",
      title: "viewWillAppear ile viewDidAppear farkı nedir?",
      answer: "viewWillAppear ekran görünmeden hemen önce, viewDidAppear ise ekranda tamamen göründükten sonra çalışır. Veri yenileme ve animasyon zamanlaması için bu fark önemlidir."
    },
    {
      category: "UIKit",
      level: "Orta",
      title: "Auto Layout nedir?",
      answer: "Auto Layout, arayüz bileşenlerinin farklı ekran boyutlarında doğru yerleşmesini sağlayan constraint sistemidir."
    },
    {
      category: "UIKit",
      level: "Orta",
      title: "UITableView ve UICollectionView farkı nedir?",
      answer: "UITableView satır tabanlı listeler için kullanılır. UICollectionView daha esnek grid, yatay liste ve özel layout yapıları için uygundur."
    },
    {
      category: "UIKit",
      level: "İleri",
      title: "Delegate pattern UIKit'te neden sık kullanılır?",
      answer: "Delegate pattern, bir nesnenin olaylarını başka bir nesneye bildirmek için kullanılır. Table view seçimleri ve text field olayları buna örnektir."
    },
    {
      category: "UIKit",
      level: "İleri",
      title: "Programmatic UI ile storyboard arasındaki fark nedir?",
      answer: "Storyboard görsel tasarım ekranı sunar. Programmatic UI ise arayüzü tamamen kodla kurar; büyük projelerde kontrol, tekrar kullanılabilirlik ve merge süreci açısından avantaj sağlayabilir."
    },
    {
      category: "Data Modeling",
      level: "Başlangıç",
      title: "Model nedir?",
      answer: "Model, uygulamanın kullandığı veriyi temsil eden yapıdır. User, Product, Habit veya JournalEntry gibi yapılar model olarak düşünülebilir."
    },
    {
      category: "Data Modeling",
      level: "Başlangıç",
      title: "Computed property nedir?",
      answer: "Computed property, doğrudan saklanmayan, başka değerlerden hesaplanarak dönen özelliktir."
    },
    {
      category: "Data Modeling",
      level: "Orta",
      title: "Codable model tasarımında neden önemlidir?",
      answer: "Codable, JSON verisini Swift modeline veya Swift modelini JSON'a dönüştürmeyi kolaylaştırır. API ile çalışan uygulamalarda model katmanını daha düzenli yapar."
    },
    {
      category: "Data Modeling",
      level: "Orta",
      title: "DTO ile domain model farkı nedir?",
      answer: "DTO genellikle API'den gelen ham veriyi taşır. Domain model ise uygulama içinde iş mantığına daha uygun ve temiz hale getirilmiş veri yapısıdır."
    },
    {
      category: "Data Modeling",
      level: "Orta",
      title: "SwiftData veya Core Data ne işe yarar?",
      answer: "SwiftData ve Core Data, uygulama verilerini kalıcı olarak saklamak için kullanılır. Uygulama kapatılsa bile kayıtların korunmasını sağlar."
    },
    {
      category: "Data Modeling",
      level: "Orta",
      title: "UserDefaults hangi veriler için uygundur?",
      answer: "UserDefaults küçük ayarlar, tema tercihi veya onboarding tamamlandı bilgisi gibi basit değerler için uygundur. Büyük veri ve hassas bilgi için uygun değildir."
    },
    {
      category: "Data Modeling",
      level: "İleri",
      title: "Keychain hangi veriler için tercih edilir?",
      answer: "Keychain, token, parola ve hassas kimlik bilgileri gibi güvenli saklanması gereken veriler için tercih edilir."
    },
    {
      category: "Data Modeling",
      level: "İleri",
      title: "Offline-first yaklaşım nedir?",
      answer: "Offline-first yaklaşım, uygulamanın internet yokken de temel verilerle çalışabilmesini hedefler. Veri yerelde saklanır ve bağlantı gelince senkronize edilir."
    },
    {
      category: "Architecture",
      level: "Başlangıç",
      title: "MVC nedir?",
      answer: "MVC, kodu Model, View ve Controller olarak ayıran mimari yaklaşımdır. Model veriyi, View arayüzü, Controller ise kullanıcı etkileşimi ve akışı yönetir."
    },
    {
      category: "Architecture",
      level: "Başlangıç",
      title: "Neden katmanlı mimari kullanılır?",
      answer: "Katmanlı mimari, ekran, iş mantığı ve veri erişimi gibi sorumlulukları ayırır. Böylece kodun okunması, test edilmesi ve değiştirilmesi kolaylaşır."
    },
    {
      category: "Architecture",
      level: "Orta",
      title: "MVVM mimarisinde ViewModel'in görevi nedir?",
      answer: "ViewModel, ekranın ihtiyaç duyduğu veriyi hazırlar ve sunum mantığını yönetir. View'ın servis veya veri kaynağına doğrudan bağımlı olmasını azaltır."
    },
    {
      category: "Architecture",
      level: "Orta",
      title: "Coordinator pattern ne işe yarar?",
      answer: "Coordinator pattern, ekran geçişlerini view controller veya view içinden ayırır. Navigation akışını daha merkezi ve yönetilebilir hale getirir."
    },
    {
      category: "Architecture",
      level: "Orta",
      title: "Dependency Injection ne sağlar?",
      answer: "Dependency Injection, bir nesnenin ihtiyaç duyduğu bağımlılıkları dışarıdan almasını sağlar. Bu yapı test edilebilirliği ve esnekliği artırır."
    },
    {
      category: "Architecture",
      level: "Orta",
      title: "Repository pattern neden kullanılır?",
      answer: "Repository pattern, veri kaynağına erişimi soyutlar. API, local database veya mock veri arasında geçiş yapmayı kolaylaştırır."
    },
    {
      category: "Architecture",
      level: "Orta",
      title: "SOLID prensiplerinden Single Responsibility ne anlatır?",
      answer: "Single Responsibility, bir sınıfın değişmek için tek bir nedeni olması gerektiğini söyler. Her sınıfın sorumluluğu net olduğunda bakım kolaylaşır."
    },
    {
      category: "Architecture",
      level: "İleri",
      title: "Clean Architecture iOS projesinde nasıl uygulanabilir?",
      answer: "Entity, use case, repository ve presentation katmanları ayrılarak uygulanabilir. Amaç iş kurallarını arayüz ve veri kaynağından bağımsız tutmaktır."
    },
    {
      category: "Architecture",
      level: "İleri",
      title: "Modüler proje yapısının avantajı nedir?",
      answer: "Modüler yapı, büyük projelerde özelliklerin ayrı paketler halinde geliştirilmesini sağlar. Derleme süreci, takım çalışması ve test kapsamı daha yönetilebilir olur."
    },
    {
      category: "Architecture",
      level: "İleri",
      title: "Test edilebilir mimari nasıl anlaşılır?",
      answer: "Bağımlılıkları dışarıdan alabilen, iş mantığını arayüzden ayıran ve mock nesnelerle denenebilen yapı test edilebilir mimariye daha yakındır."
    },
    {
      category: "Networking",
      level: "Başlangıç",
      title: "API nedir?",
      answer: "API, uygulamanın başka bir sistemle veri alışverişi yapmasını sağlayan arayüzdür. Mobil uygulamalar çoğu zaman backend servislerine API üzerinden bağlanır."
    },
    {
      category: "Networking",
      level: "Başlangıç",
      title: "HTTP methodları ne işe yarar?",
      answer: "GET veri almak, POST yeni veri göndermek, PUT/PATCH güncellemek, DELETE ise veri silmek için kullanılır."
    },
    {
      category: "Networking",
      level: "Orta",
      title: "URLSession ne amaçla kullanılır?",
      answer: "URLSession, HTTP istekleri yapmak, veri indirmek, dosya yüklemek ve API ile iletişim kurmak için kullanılan Apple frameworküdür."
    },
    {
      category: "Networking",
      level: "Orta",
      title: "Codable API işlemlerinde nasıl kullanılır?",
      answer: "Codable, JSON response'u Swift modeline dönüştürür veya Swift modelini request body olarak JSON'a çevirir."
    },
    {
      category: "Networking",
      level: "Orta",
      title: "Status code neden kontrol edilir?",
      answer: "Status code, isteğin başarılı mı, hatalı mı veya yetki gerektirip gerektirmediğini gösterir. Sadece veri gelmesine bakmak güvenilir değildir."
    },
    {
      category: "Networking",
      level: "Orta",
      title: "Loading, success ve error state neden gerekir?",
      answer: "Kullanıcıya işlemin devam ettiğini, tamamlandığını veya hata aldığını göstermek için gerekir. Bu durumlar yönetilmezse arayüz belirsiz kalır."
    },
    {
      category: "Networking",
      level: "İleri",
      title: "Token tabanlı kimlik doğrulama nasıl çalışır?",
      answer: "Kullanıcı giriş yaptıktan sonra bir token alır. Sonraki isteklerde bu token header içinde gönderilerek kullanıcının yetkisi doğrulanır."
    },
    {
      category: "Networking",
      level: "İleri",
      title: "Retry mekanizması ne zaman gerekir?",
      answer: "Geçici ağ hataları veya kısa süreli sunucu problemlerinde isteği kontrollü şekilde yeniden denemek için kullanılır. Ancak sonsuz tekrar ve kullanıcıyı bekletme riskine dikkat edilmelidir."
    },
    {
      category: "Concurrency",
      level: "Başlangıç",
      title: "Asenkron işlem nedir?",
      answer: "Asenkron işlem, sonucu hemen dönmeyen ve uygulamanın ana akışını durdurmadan çalışan işlemdir. Ağ isteği ve dosya okuma buna örnektir."
    },
    {
      category: "Concurrency",
      level: "Orta",
      title: "async/await nedir?",
      answer: "async/await, asenkron kodu daha okunabilir ve sıralı yazmayı sağlayan Swift concurrency yapısıdır."
    },
    {
      category: "Concurrency",
      level: "Orta",
      title: "Main thread neden önemlidir?",
      answer: "Arayüz güncellemeleri main thread üzerinde yapılmalıdır. Aksi halde görsel sorunlar, gecikmeler veya çalışma zamanı hataları oluşabilir."
    },
    {
      category: "Concurrency",
      level: "Orta",
      title: "Task ne için kullanılır?",
      answer: "Task, Swift concurrency içinde yeni bir asenkron çalışma başlatmak için kullanılır. Özellikle async fonksiyon çağırmak gerektiğinde tercih edilir."
    },
    {
      category: "Concurrency",
      level: "Orta",
      title: "GCD nedir?",
      answer: "Grand Central Dispatch, işleri farklı kuyruklarda çalıştırmayı sağlayan Apple teknolojisidir. Main ve background queue ayrımı bu yapıda önemlidir."
    },
    {
      category: "Concurrency",
      level: "İleri",
      title: "Race condition nedir?",
      answer: "Race condition, birden fazla işlem aynı veriye kontrolsüz eriştiğinde sonucun işlem sırasına bağlı olarak değişmesidir. Veri tutarlılığı açısından risklidir."
    },
    {
      category: "Concurrency",
      level: "İleri",
      title: "Actor ne işe yarar?",
      answer: "Actor, paylaşılan veriye güvenli erişim sağlamak için kullanılır. Aynı anda birden fazla yerden veri değiştirme riskini azaltır."
    },
    {
      category: "Testing",
      level: "Başlangıç",
      title: "Unit test nedir?",
      answer: "Unit test, küçük bir kod parçasının beklenen sonucu verip vermediğini kontrol eden test türüdür."
    },
    {
      category: "Testing",
      level: "Başlangıç",
      title: "Test yazmanın proje kalitesine katkısı nedir?",
      answer: "Testler, değişikliklerden sonra eski davranışların bozulup bozulmadığını gösterir. Özellikle büyüyen projelerde güvenli geliştirme sağlar."
    },
    {
      category: "Testing",
      level: "Orta",
      title: "XCTest ne işe yarar?",
      answer: "XCTest, Apple platformlarında unit test ve UI test yazmak için kullanılan resmi test frameworküdür."
    },
    {
      category: "Testing",
      level: "Orta",
      title: "UI test nedir?",
      answer: "UI test, kullanıcının ekranda yaptığı işlemleri otomatik olarak test eder. Giriş, listeleme ve buton akışları bu şekilde kontrol edilebilir."
    },
    {
      category: "Testing",
      level: "Orta",
      title: "Mock servis neden kullanılır?",
      answer: "Mock servis, gerçek API'ye bağlanmadan test yapılmasını sağlar. Böylece testler daha hızlı, kontrollü ve tekrar edilebilir olur."
    },
    {
      category: "Testing",
      level: "İleri",
      title: "Test coverage tek başına kaliteyi garanti eder mi?",
      answer: "Hayır. Yüksek coverage faydalıdır ancak testlerin doğru senaryoları kontrol etmesi gerekir. Sadece satır çalıştırmak gerçek güvence sağlamaz."
    },
    {
      category: "Testing",
      level: "İleri",
      title: "Snapshot test hangi durumda kullanılır?",
      answer: "Snapshot test, arayüzün beklenen görünümden sapıp sapmadığını kontrol etmek için kullanılır. Tasarım değişikliklerini yakalamada faydalıdır."
    },
    {
      category: "Accessibility",
      level: "Başlangıç",
      title: "Accessibility neden önemlidir?",
      answer: "Accessibility, uygulamanın farklı ihtiyaçlara sahip kullanıcılar tarafından da rahat kullanılmasını sağlar. Kaliteli bir mobil ürünün temel parçasıdır."
    },
    {
      category: "Accessibility",
      level: "Başlangıç",
      title: "VoiceOver nedir?",
      answer: "VoiceOver, ekrandaki öğeleri sesli okuyarak görme engelli kullanıcıların uygulamayla etkileşim kurmasını sağlayan Apple erişilebilirlik özelliğidir."
    },
    {
      category: "Accessibility",
      level: "Orta",
      title: "Dynamic Type nedir?",
      answer: "Dynamic Type, metinlerin kullanıcının sistem yazı boyutu tercihine göre ölçeklenmesini sağlar."
    },
    {
      category: "Accessibility",
      level: "Orta",
      title: "Accessibility label ne işe yarar?",
      answer: "Accessibility label, ekrandaki bir öğenin VoiceOver tarafından nasıl okunacağını belirler. Özellikle ikon butonlarda açıklayıcı label önemlidir."
    },
    {
      category: "Accessibility",
      level: "İleri",
      title: "Renk kontrastı neden kontrol edilmelidir?",
      answer: "Yetersiz kontrast, metinlerin okunmasını zorlaştırır. Özellikle düşük görme keskinliği olan kullanıcılar için erişilebilirliği doğrudan etkiler."
    },
    {
      category: "App Distribution",
      level: "Başlangıç",
      title: "TestFlight ne işe yarar?",
      answer: "TestFlight, uygulamayı App Store'a çıkarmadan önce test kullanıcılarına dağıtmak ve geri bildirim almak için kullanılır."
    },
    {
      category: "App Distribution",
      level: "Orta",
      title: "App Store Connect nedir?",
      answer: "App Store Connect, uygulama sürümleri, mağaza bilgileri, TestFlight, analizler ve yayın sürecinin yönetildiği Apple platformudur."
    },
    {
      category: "App Distribution",
      level: "Orta",
      title: "Sürüm notu neden yazılır?",
      answer: "Sürüm notu, yeni versiyonda nelerin değiştiğini kullanıcıya ve test ekibine açıklar. Bakım sürecini daha şeffaf hale getirir."
    },
    {
      category: "App Distribution",
      level: "İleri",
      title: "App Store inceleme sürecinde nelere dikkat edilir?",
      answer: "Uygulamanın çökmeden çalışması, gizlilik kurallarına uyması, yanıltıcı içerik taşımaması ve Apple yönergelerine uygun olması beklenir."
    },
    {
      category: "App Distribution",
      level: "İleri",
      title: "Crash log neden önemlidir?",
      answer: "Crash log, uygulamanın nerede ve hangi koşulda çöktüğünü anlamaya yardım eder. Yayın sonrası kalite takibi için kritiktir."
    },
    {
      category: "Portfolio",
      level: "Başlangıç",
      title: "Junior iOS portfolyosunda neler olmalıdır?",
      answer: "Çalışan proje, açık README, ekran görüntüleri, kullanılan teknolojiler, kurulum adımları ve projede öğrenilenler yer almalıdır."
    },
    {
      category: "Portfolio",
      level: "Başlangıç",
      title: "README dosyasında hangi bilgiler bulunmalıdır?",
      answer: "Proje amacı, özellikler, kullanılan teknolojiler, çalıştırma adımları, ekran görüntüleri ve varsa geliştirme notları bulunmalıdır."
    },
    {
      category: "Portfolio",
      level: "Orta",
      title: "Bir iOS projesini portfolyoda güçlü gösteren şey nedir?",
      answer: "Sadece ekran görüntüsü değil, problemin ne olduğu, çözümün nasıl kurulduğu, mimari kararlar ve proje sürecinde alınan kararlar portfolyoyu güçlendirir."
    },
    {
      category: "Portfolio",
      level: "Orta",
      title: "GitHub commit geçmişi neden önemlidir?",
      answer: "Commit geçmişi, projenin tek seferde değil aşamalı olarak geliştirildiğini gösterir. İş görüşmelerinde çalışma düzeni hakkında fikir verir."
    },
    {
      category: "Portfolio",
      level: "İleri",
      title: "Teknik mülakatta proje anlatırken nasıl bir sıra izlenmelidir?",
      answer: "Önce problem ve amaç anlatılır, sonra kullanılan teknolojiler, mimari yapı, zorlanılan noktalar, çözümler ve öğrenilenler açıklanır."
    },
    {
      category: "Security",
      level: "Orta",
      title: "Mobil uygulamada hassas veri neden düz şekilde saklanmamalıdır?",
      answer: "Token, parola veya kişisel veri düz şekilde saklanırsa cihaz ele geçirildiğinde risk oluşur. Hassas bilgiler için Keychain gibi güvenli yapılar kullanılmalıdır."
    },
    {
      category: "Security",
      level: "İleri",
      title: "HTTPS kullanımı neden önemlidir?",
      answer: "HTTPS, uygulama ile sunucu arasındaki verinin şifreli taşınmasını sağlar. Kimlik bilgileri ve kullanıcı verileri için temel güvenlik gereksinimidir."
    }
  ]
};
