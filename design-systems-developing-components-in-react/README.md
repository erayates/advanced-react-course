# Kapsülleme ve Kapsüllenmiş Stiller

## Kapsülleme Nedir?
Kapsülleme, kodun bazı bölümlerine erişimi kısıtlamak ve bu bölümleri yalnızca belirli kanallar aracılığıyla kullanıma sunmaktır.

---

## Kapsüllenmiş Stiller Neden Önemlidir?
Stilleri birleştirirken, oluşturduğumuz her bileşenin, dışarıdaki diğer bileşenlerle çakışmalara yol açabilecek yerleşim (layout) stillerini oluşturmadığından emin olmamız gerekir.

---

## Kapsüllenmiş Stillerin Prensipleri

### Prensip #1: Bileşenler Kendi Yerleşimlerini Belirlememelidir
Bir bileşen, kendi `position`, `size` ve `margin` gibi CSS özelliklerini ayarlamamalıdır. Bu özellikler, parent bileşen tarafından kontrol edilmelidir.

---

### Prensip #2: Bileşenler Sadece Kendilerini ve Doğrudan Alt Childrenları Yerleştirmelidir
Bir bileşen, yalnızca kendi stilini ve doğrudan alt childrenların yerleşimini kontrol etmeye odaklanmalıdır. Sibling veya alakası olmayan bileşenleri etkilememelidir.
