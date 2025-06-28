import AnimationWrapper from "@/components/animation-wrapper";
import Navbar from "@/components/navbar";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar";
import "@/css/app.css";

export default function Home() {
  return (
    <div>
      <SidebarProvider>
        <Sidebar>
          <AppSidebar />
        </Sidebar>
        <main>
          <Navbar />
          <AnimationWrapper>
            <div className="h-screen">Hi</div>
            <div className="h-screen">Hello</div>
          </AnimationWrapper>
        </main>
      </SidebarProvider>
    </div>
  )
}