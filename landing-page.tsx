import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Heart, BookOpen, Clock, Facebook, Youtube, Instagram, Phone } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Medsikick</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm..."
                className="w-[200px] pl-8 md:w-[300px] rounded-full bg-muted"
              />
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Khóa học
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Trang chủ
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Khóa sơ cứu doanh nghiệp
            </Link>
            <div className="flex gap-2">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600"
              >
                Đăng ký
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
              >
                Đăng nhập
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    VIỆT NAM
                    <br />
                    <span className="text-6xl font-extrabold">AN TOÀN</span>
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    Bổ sung kiến thức trong trường hợp khẩn cấp. Nâng cao kỹ năng sơ cứu và cứu sống mạng người trong
                    tình huống y tế khẩn cấp.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 h-12 px-8 shadow-lg hover:bg-gray-100"
                  >
                    Tải ứng dụng
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full blur-3xl opacity-50"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    width={500}
                    height={500}
                    alt="Medsikick App"
                    className="relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blended First Aid Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 font-medium">
                    AN TOÀN MỖI NGÀY CÙNG
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter text-blue-600 sm:text-5xl">
                    BLENDED
                    <br />
                    FIRST AID
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Sơ cấp cứu cho tất cả mọi người. Medsikick cung cấp các công cụ và kiến thức cần thiết để xử lý các
                    tình huống khẩn cấp.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white h-12 px-8 shadow-lg hover:bg-blue-700"
                  >
                    Tìm hiểu thêm
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Sơ cấp cứu"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-700">
                  Giải pháp sơ cấp cứu toàn diện
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Medsikick cung cấp các công cụ và kiến thức cần thiết để xử lý các tình huống khẩn cấp.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-8 shadow-md transition-all duration-200 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                  <Heart className="h-7 w-7 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-700">Sơ cứu khẩn cấp</h3>
                  <p className="text-muted-foreground">
                    Hướng dẫn chi tiết về các kỹ thuật sơ cứu cơ bản và nâng cao cho nhiều tình huống khác nhau.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-8 shadow-md transition-all duration-200 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                  <BookOpen className="h-7 w-7 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-700">Khóa học trực tuyến</h3>
                  <p className="text-muted-foreground">
                    Các khóa học trực tuyến được thiết kế bởi các chuyên gia y tế với chứng chỉ được công nhận.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-8 shadow-md transition-all duration-200 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-7 w-7 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-700">Phản ứng nhanh</h3>
                  <p className="text-muted-foreground">
                    Hướng dẫn nhanh chóng và dễ tiếp cận trong các tình huống khẩn cấp khi mỗi giây đều quan trọng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full blur-3xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=800&width=400"
                    width={400}
                    height={800}
                    alt="Medsikick App Screenshot"
                    className="relative z-10 drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-700">
                    Tải ứng dụng Medsikick
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    Mang theo kiến thức sơ cấp cứu trong túi của bạn. Ứng dụng Medsikick cung cấp hướng dẫn chi tiết,
                    video hướng dẫn và công cụ khẩn cấp.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white h-12 px-8 shadow-lg hover:bg-blue-700"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-700">
                  Khóa học sơ cấp cứu
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Học cách cứu sống mạng người với các khóa học sơ cấp cứu chuyên nghiệp của chúng tôi.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col overflow-hidden rounded-xl border bg-background shadow-md h-full transition-all duration-200 hover:shadow-lg">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    fill
                    alt="Các bệnh truyền nhiễm nhẹ và thường gặp"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-2 p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-blue-700">Các bệnh truyền nhiễm nhẹ và thường gặp</h3>
                  <p className="text-gray-600">Các bệnh truyền nhiễm nhẹ và thường gặp</p>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-11 shadow-md">Đăng ký ngay</Button>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-xl border bg-background shadow-md h-full transition-all duration-200 hover:shadow-lg">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    fill
                    alt="Hiểu về Bệnh Nền và Cách Kiểm Soát"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-2 p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-blue-700">Hiểu về Bệnh Nền và Cách Kiểm Soát</h3>
                  <p className="text-gray-600">Hiểu về Bệnh Nền và Cách Kiểm Soát</p>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-11 shadow-md">Đăng ký ngay</Button>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-xl border bg-background shadow-md h-full transition-all duration-200 hover:shadow-lg">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    fill
                    alt="Phân biệt các loại virus"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-2 p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-blue-700">Phân biệt các loại virus</h3>
                  <p className="text-gray-600">Phân biệt các loại virus</p>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-11 shadow-md">Đăng ký ngay</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sẵn sàng cứu sống mạng người?</h2>
                <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                  Tải ứng dụng Medsikick ngay hôm nay và trang bị cho bản thân kiến thức sơ cấp cứu quan trọng.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 h-12 px-8 shadow-lg hover:bg-gray-100"
                >
                  Tải ứng dụng
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Anniversary Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-700">
                  Kỷ niệm 10 năm thành lập
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  Chúng tôi tự hào đã đồng hành cùng cộng đồng trong suốt 10 năm qua, mang đến kiến thức sơ cấp cứu cho
                  mọi người.
                </p>
              </div>
              <div className="relative w-full max-w-3xl">
                <Image
                  src="/placeholder.svg?height=300&width=800"
                  width={800}
                  height={300}
                  alt="10 năm thành lập"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-blue-900 py-8 md:py-12 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">Medsikick</span>
              </div>
              <p className="text-sm text-blue-100">
                Medsikick - Ứng dụng sơ cấp cứu hàng đầu Việt Nam, cung cấp kiến thức và công cụ cần thiết để xử lý các
                tình huống khẩn cấp.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-blue-200 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-blue-200">Khóa học</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Sơ cấp cứu cơ bản
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Sơ cấp cứu nâng cao
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Sơ cấp cứu cho doanh nghiệp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Sơ cấp cứu cho trẻ em
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-blue-200">Liên hệ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-200" />
                  <span className="text-blue-100">+84 123 456 789</span>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Đối tác
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-800 pt-8 text-center text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Medsikick. Tất cả các quyền được bảo lưu.
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+84123456789"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
