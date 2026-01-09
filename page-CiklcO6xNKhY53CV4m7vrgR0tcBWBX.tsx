import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Heart, BookOpen, Clock, Facebook, Youtube, Instagram } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative bg-red-100 p-2 rounded-full shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Medsiki Logo"
                  width={300}
                  height={100}
                  className="h-12 w-auto drop-shadow-md"
                  priority
                />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-base font-medium text-gray-700 hover:text-medsiki transition-colors">
              Trang chủ
            </Link>
            <Link href="#courses" className="text-base font-medium text-gray-700 hover:text-medsiki transition-colors">
              Khóa học
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-medsiki to-[#7A000D] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    VÌ SỨC KHỎE
                    <br />
                    <span className="text-6xl font-extrabold">CỘNG ĐỒNG</span>
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    Bổ sung kiến thức trong trường hợp khẩn cấp. Nâng cao kỹ năng sơ cứu và cứu sống mạng người trong
                    tình huống y tế khẩn cấp.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <a
                    href="https://github.com/haian041003/Medsiki-Landing-Page/releases/download/v1.2/app-release.apk"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-medsiki h-12 px-8 shadow-lg hover:bg-gray-100"
                  >
                    Tải ứng dụng
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-100 rounded-full blur-3xl opacity-50"></div>
                  <Image
                    src="/images/medsiki-app.png"
                    width={500}
                    height={500}
                    alt="Medsiki App"
                    className="relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-medsiki font-heading">
                  Giải pháp sơ cấp cứu toàn diện
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Medsiki cung cấp các công cụ và kiến thức cần thiết để xử lý các tình huống khẩn cấp.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-8 shadow-md transition-all duration-200 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
                  <Heart className="h-7 w-7 text-medsiki" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-medsiki">Sơ cứu khẩn cấp</h3>
                  <p className="text-muted-foreground">
                    Hướng dẫn chi tiết về các kỹ thuật sơ cứu cơ bản và nâng cao cho nhiều tình huống khác nhau.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-8 shadow-md transition-all duration-200 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
                  <BookOpen className="h-7 w-7 text-medsiki" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-medsiki">Khóa học trực tuyến</h3>
                  <p className="text-muted-foreground">
                    Các khóa học trực tuyến được thiết kế bởi các chuyên gia y tế với chứng chỉ được công nhận.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-8 shadow-md transition-all duration-200 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
                  <Clock className="h-7 w-7 text-medsiki" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-medsiki">Phản ứng nhanh</h3>
                  <p className="text-muted-foreground">
                    Hướng dẫn nhanh chóng và dễ tiếp cận trong các tình huống khẩn cấp khi mỗi giây đều quan trọng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-100 rounded-full blur-3xl opacity-30"></div>
                  <Image
                    src="/images/medsiki-app.png"
                    width={400}
                    height={800}
                    alt="Medsiki App Screenshot"
                    className="relative z-10 drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-medsiki font-heading">
                    Tải ứng dụng Medsiki
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    Mang theo kiến thức sơ cấp cứu trong túi của bạn. Ứng dụng Medsiki cung cấp hướng dẫn chi tiết,
                    video hướng dẫn và công cụ khẩn cấp.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <a
                    href="https://github.com/haian041003/Medsiki-Landing-Page/releases/download/v1.2/app-release.apk"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-medsiki text-white h-12 px-8 shadow-lg hover:bg-[#7A000D]"
                  >
                    Tải ứng dụng
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-500">* Ứng dụng miễn phí</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-medsiki font-heading">
                  Khóa học sơ cấp cứu
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Học cách cứu sống mạng người với các khóa học sơ cấp cứu chuyên nghiệp của chúng tôi.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div
                id="course-1"
                className="flex flex-col overflow-hidden rounded-xl border bg-background shadow-md h-full transition-all duration-200 hover:shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/images/course-1.png"
                    fill
                    alt="Các bệnh truyền nhiễm nhẹ và thường gặp"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-2 p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-medsiki">Các bệnh truyền nhiễm nhẹ và thường gặp</h3>
                  <p className="text-gray-600">Các bệnh truyền nhiễm nhẹ và thường gặp</p>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-medsiki hover:bg-[#7A000D] h-11 shadow-md">Đăng ký ngay</Button>
                </div>
              </div>

              <div
                id="course-2"
                className="flex flex-col overflow-hidden rounded-xl border bg-background shadow-md h-full transition-all duration-200 hover:shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/images/course-2.png"
                    fill
                    alt="Hiểu về Bệnh Nền và Cách Kiểm Soát"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-2 p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-medsiki">Hiểu về Bệnh Nền và Cách Kiểm Soát</h3>
                  <p className="text-gray-600">Hiểu về Bệnh Nền và Cách Kiểm Soát</p>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-medsiki hover:bg-[#7A000D] h-11 shadow-md">Đăng ký ngay</Button>
                </div>
              </div>

              <div
                id="course-3"
                className="flex flex-col overflow-hidden rounded-xl border bg-background shadow-md h-full transition-all duration-200 hover:shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image src="/images/course-3.png" fill alt="Phân biệt các loại virus" className="object-cover" />
                </div>
                <div className="flex flex-col space-y-2 p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-medsiki">Phân biệt các loại virus</h3>
                  <p className="text-gray-600">Phân biệt các loại virus</p>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-medsiki hover:bg-[#7A000D] h-11 shadow-md">Đăng ký ngay</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-medsiki to-[#7A000D] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-heading">
                  Sẵn sàng cứu sống mạng người?
                </h2>
                <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                  Tải ứng dụng Medsiki ngay hôm nay và trang bị cho bản thân kiến thức sơ cấp cứu quan trọng.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <a
                  href="https://github.com/haian041003/Medsiki-Landing-Page/releases/download/v1.2/app-release.apk"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-medsiki h-12 px-8 shadow-lg hover:bg-gray-100"
                >
                  Tải ứng dụng
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-4 max-w-md">
              <div className="flex items-center gap-2">
                <div className="bg-red-100 p-2 rounded-full shadow-sm">
                  <Image
                    src="/images/logo.png"
                    alt="Medsiki Logo"
                    width={280}
                    height={90}
                    className="h-12 w-auto drop-shadow-md"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Medsiki - Ứng dụng sơ cấp cứu hàng đầu Việt Nam, cung cấp kiến thức và công cụ cần thiết để xử lý các
                tình huống khẩn cấp.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61572672485523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-medsiki transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <Link href="#" className="text-gray-500 hover:text-medsiki transition-colors">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-medsiki transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4 md:text-right">
              <h4 className="text-sm font-medium text-medsiki">Khóa học</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#course-1" className="text-gray-600 hover:text-medsiki transition-colors">
                    Các bệnh truyền nhiễm nhẹ và thường gặp
                  </Link>
                </li>
                <li>
                  <Link href="#course-2" className="text-gray-600 hover:text-medsiki transition-colors">
                    Hiểu về Bệnh Nền và Cách Kiểm Soát
                  </Link>
                </li>
                <li>
                  <Link href="#course-3" className="text-gray-600 hover:text-medsiki transition-colors">
                    Phân biệt các loại virus
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Medsiki. Tất cả các quyền được bảo lưu.
          </div>
        </div>
      </footer>
    </div>
  )
}
