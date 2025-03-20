import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const RecruiterCompanies = () => {
  const [companies, setCompanies] = useState([
    { id: 1, name: 'TechCorp', industry: 'Technology', openPositions: 5 },
    { id: 2, name: 'FinanceHub', industry: 'Finance', openPositions: 3 },
    { id: 3, name: 'MedicalPro', industry: 'Healthcare', openPositions: 7 },
  ]);
  const [open, setOpen] = useState(false);
  const [newCompany, setNewCompany] = useState({
    name: '',
    industry: '',
    openPositions: 0,
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Handle adding a new company
  const handleAddCompany = () => {
    const id = companies.length > 0 ? Math.max(...companies.map((c) => c.id)) + 1 : 1;
    setCompanies([...companies, { ...newCompany, id }]);
    setNewCompany({ name: '', industry: '', openPositions: 0 });
    setOpen(false);
  };

  // Filter companies based on search query
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Managed Companies</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Company
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Company</DialogTitle>
              <DialogDescription>
                Enter the details of the company you want to add to your list.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="industry" className="text-right">
                  Industry
                </Label>
                <Input
                  id="industry"
                  value={newCompany.industry}
                  onChange={(e) => setNewCompany({ ...newCompany, industry: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="positions" className="text-right">
                  Open Positions
                </Label>
                <Input
                  id="positions"
                  type="number"
                  value={newCompany.openPositions}
                  onChange={(e) =>
                    setNewCompany({ ...newCompany, openPositions: parseInt(e.target.value) || 0 })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddCompany}>
                Add Company
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <Input
          placeholder="Search companies by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Companies Table */}
      <div className="w-full overflow-x-auto">
  <Table className="w-full">
    <TableHeader>
      <TableRow>
        <TableHead className="w-1/4">Name</TableHead>
        <TableHead className="w-1/4">Industry</TableHead>
        <TableHead className="w-1/4">Open Positions</TableHead>
        <TableHead className="w-1/4">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {filteredCompanies.length > 0 ? (
        filteredCompanies.map((company) => (
          <TableRow key={company.id} className="border-b">
            <TableCell className="text-left">{company.name}</TableCell>
            <TableCell className="text-left">{company.industry}</TableCell>
            <TableCell className="text-left">{company.openPositions}</TableCell>
            <TableCell className="flex space-x-2">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button variant="default" size="sm">
                Manage
              </Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={4} className="text-center py-4">
            No companies found.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
</div>

      {/* Empty State */}
      {companies.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <h3 className="mt-4 text-lg font-medium">No companies added yet</h3>
          <p className="mt-2 text-gray-500">
            Click the "Add Company" button to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecruiterCompanies;