import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, Settings, User, Search, Menu as MenuIcon } from 'lucide-react'; // Added MenuIcon for mobile

// Minimal props, can be expanded as needed
interface HeaderProps {
  userName?: string;
  userEmail?: string; // For display in dropdown
  userAvatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  userName = "User",
  userEmail = "user@example.com",
  userAvatarUrl,
}) => {
  console.log("Rendering Dashboard Header");

  const userInitials = userName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase() || "U";

  // Placeholder for mobile menu state
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      {/* Mobile Menu Toggle - would integrate with a Sidebar or Sheet component */}
      <Button size="icon" variant="outline" className="sm:hidden">
        <MenuIcon className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Placeholder for a breadcrumb or page title area on mobile */}
      <div className="hidden sm:block font-semibold">
        {/* This could be dynamic based on route e.g., Dashboard, Settings */}
        Dashboard
      </div>

      {/* Search (optional, example) */}
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
        />
      </div>

      {/* Notification Icon (placeholder) */}
      <Button variant="ghost" size="icon" className="ml-auto rounded-full md:ml-0" aria-label="Notifications">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Toggle notifications</span>
      </Button>

      {/* User Avatar and Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={userAvatarUrl} alt={userName} />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{userName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {userEmail}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/account/profile"> {/* Example link */}
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/account/settings"> {/* Example link */}
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem> {/* onClick should handle logout logic */}
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

// Shadcn 'Input' component is assumed to exist
// For the purpose of this Header, if Input is not directly available,
// this simple placeholder can be used or imported from "@/components/ui/input"
// This is just for completeness within this file if shadcn Input is not auto-imported.
// In a real scenario, `Input` would be `import { Input } from "@/components/ui/input";`
// For this exercise, I am assuming it is imported.
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  // A simple placeholder if needed, but prefer shadcn's Input
  // console.log("Using placeholder Input in Header, ideally import from @/components/ui/input");
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";


export default Header;