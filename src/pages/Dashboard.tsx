import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Package, DollarSign, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your products and sales</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-5 h-5" />
            Add New Product
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Sales</p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="p-12 text-center">
              <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No products yet</h3>
              <p className="text-muted-foreground mb-6">
                Start by adding your first digital product to begin selling
              </p>
              <Button className="gap-2">
                <Plus className="w-5 h-5" />
                Add Your First Product
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No orders yet</p>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">Analytics will appear here</p>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Shop Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Shop Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-lg"
                      placeholder="Your shop name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Shop Description</label>
                    <textarea
                      className="w-full mt-1 px-3 py-2 border border-border rounded-lg"
                      rows={4}
                      placeholder="Tell customers about your shop"
                    />
                  </div>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
