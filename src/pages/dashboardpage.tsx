import React from 'react';
import Header from '@/components/layout/Header'; // Corrected path based on custom_component_code
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from 'react-router-dom';
import { Home, Settings, Users, Package, BarChart3, PlusCircle } from 'lucide-react';

// Sample data for the table
const sampleInvoices = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV002",
    status: "Pending",
    method: "PayPal",
    amount: "$150.00",
  },
  {
    invoice: "INV003",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: "$350.00",
  },
];

// Sample data for navigation components
const components: { title: string; href: string; description: string }[] = [
  {
    title: "User Profile",
    href: "/dashboard/profile",
    description:
      "View and edit your personal information and preferences.",
  },
  {
    title: "Application Settings",
    href: "/dashboard/settings",
    description:
      "Configure application-wide settings and integrations.",
  },
  {
    title: "Team Management",
    href: "/dashboard/team",
    description: "Manage team members, roles, and permissions (if applicable).",
  },
];


const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Sidebar Navigation (Conceptual - could be a separate component) */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
           <Link
            to="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">My App</span>
          </Link>
          <NavigationMenu orientation="vertical" className="w-full">
            <NavigationMenuList className="flex-col items-start space-y-1 w-full">
              <NavigationMenuItem className="w-full">
                <Link to="/dashboard" className={navigationMenuTriggerStyle() + " w-full justify-start"}>
                  <Home className="mr-2 h-4 w-4" /> Dashboard
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuTrigger className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
               <NavigationMenuItem className="w-full">
                <Link to="/dashboard/users" className={navigationMenuTriggerStyle() + " w-full justify-start"}>
                  <Users className="mr-2 h-4 w-4" /> Users
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <Link to="/dashboard/analytics" className={navigationMenuTriggerStyle() + " w-full justify-start"}>
                  <BarChart3 className="mr-2 h-4 w-4" /> Analytics
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60"> {/* Adjusted pl for sidebar */}
        <Header userName="Demo User" userEmail="demo@example.com" userAvatarUrl="https://placehold.co/40x40/orange/white?text=DU" />
        <main className="flex-1 p-4 sm:px-6 sm:py-0 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Item
            </Button>
          </div>

          {/* Example Cards for stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" /> {/* Using Users as placeholder icon */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            {/* Add more cards as needed */}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>A list of your recent invoices.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleInvoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">{invoice.invoice}</TableCell>
                      <TableCell>{invoice.status}</TableCell>
                      <TableCell>{invoice.method}</TableCell>
                      <TableCell className="text-right">{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

// ListItem component for NavigationMenu (can be co-located or imported)
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>, // Use Link for navigation
  React.ComponentPropsWithoutRef<typeof Link> & { title: string } // Add title prop
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href || '#'} // Ensure href is a string
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default DashboardPage;