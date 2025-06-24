'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Card,
  CardContent,
  CardActions,
  Rating,
  Chip,
  Box,
  Container,
  Grid,
  Avatar,
  IconButton,
  Menu,
  Badge,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  NotificationsOutlined as NotificationsIcon,
  AccountCircle as AccountIcon,
  Message as MessageIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  Star as StarIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { create } from 'zustand';

interface Store {
  companyType: string;
  region: string;
  dateOfIncorporation: string;
  sortBy: string;
  filterOpen: boolean;
  searchQuery: string;
  mobileMenuOpen: boolean;
  setCompanyType: (type: string) => void;
  setRegion: (region: string) => void;
  setDateOfIncorporation: (date: string) => void;
  setSortBy: (sort: string) => void;
  setFilterOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

const useStore = create<Store>((set) => ({
  companyType: 'Private Limited (SDN BHD)',
  region: 'Peninsular Malaysia (Mainland)',
  dateOfIncorporation: '17th Feb (3 Days)',
  sortBy: 'Ratings',
  filterOpen: false,
  searchQuery: '',
  mobileMenuOpen: false,
  setCompanyType: (type) => set({ companyType: type }),
  setRegion: (region) => set({ region }),
  setDateOfIncorporation: (date) => set({ dateOfIncorporation: date }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setFilterOpen: (open) => set({ filterOpen: open }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}));

// Sample company data with actual logos
const companies = [
  {
    id: 1,
    name: 'Gobiz Cosec Firm',
    subtitle: 'Company Secretary',
    logo: '/logos/global-tech-networking.png',
    rating: 4.9,
    description: 'Incorporate your company with us and get a FREE CTC copies.',
    price: 'RM 1,600',
    originalPrice: 'RM 3,200',
    discount: '50% off',
    clientCount: 120,
    completionDays: '3-5',
    tags: ['Startup', 'Message', 'Incorporate'],
  },
  {
    id: 2,
    name: 'Consistent Net',
    subtitle: 'Digital Services',
    logo: '/logos/partnership-investment.png',
    rating: 3.2,
    description: 'Get 50% off for 1st month of Secretary services',
    price: 'RM 1,499',
    originalPrice: 'RM 2,000',
    discount: '25% saving',
    clientCount: 85,
    completionDays: '2-4',
    tags: ['Message', 'Incorporate'],
  },
  {
    id: 3,
    name: 'Sarah Connor',
    subtitle: 'Individual Secretary',
    logo: '/logos/sarah-connor.png',
    rating: 5.0,
    description: 'With more than 10 years in the industry, your company is in good hands.',
    price: 'RM 1,250',
    originalPrice: 'RM 1,500',
    discount: '17% saving',
    clientCount: 200,
    completionDays: '1-3',
    tags: ['Message', 'Incorporate'],
    isIndividual: true,
  },
  {
    id: 4,
    name: 'Expert Services',
    subtitle: 'Professional Services',
    logo: '/logos/expert-services.png',
    rating: 1.1,
    description: 'We deliver the best Secretarial Services in Malaysia',
    price: 'RM 2,200',
    originalPrice: 'RM 2,500',
    discount: '12% saving',
    clientCount: 50,
    completionDays: '5-7',
    tags: ['Message', 'Incorporate'],
  },
  {
    id: 5,
    name: 'Gobiz Cosec Firm',
    subtitle: 'Company Secretary',
    logo: '/logos/global-tech-networking.png',
    rating: 4.9,
    description: 'Incorporate your company with us and get a FREE CTC copies.',
    price: 'RM 1,600',
    originalPrice: 'RM 3,200',
    discount: '50% off',
    clientCount: 120,
    completionDays: '3-5',
    tags: ['Startup', 'Message', 'Incorporate'],
  },
  {
    id: 6,
    name: 'Consistent Net',
    subtitle: 'Digital Services',
    logo: '/logos/partnership-investment.png',
    rating: 3.2,
    description: 'Get 50% off for 1st month of Secretary services',
    price: 'RM 1,499',
    originalPrice: 'RM 2,000',
    discount: '25% saving',
    clientCount: 85,
    completionDays: '2-4',
    tags: ['Message', 'Incorporate'],
  },
  {
    id: 7,
    name: 'Sarah Connor',
    subtitle: 'Individual Secretary',
    logo: '/logos/sarah-connor.png',
    rating: 5.0,
    description: 'With more than 10 years in the industry, your company is in good hands.',
    price: 'RM 1,250',
    originalPrice: 'RM 1,500',
    discount: '17% saving',
    clientCount: 200,
    completionDays: '1-3',
    tags: ['Message', 'Incorporate'],
    isIndividual: true,
  },
  {
    id: 8,
    name: 'Expert Services',
    subtitle: 'Professional Services',
    logo: '/logos/expert-services.png',
    rating: 1.1,
    description: 'We deliver the best Secretarial Services in Malaysia',
    price: 'RM 2,200',
    originalPrice: 'RM 2,500',
    discount: '12% saving',
    clientCount: 50,
    completionDays: '5-7',
    tags: ['Message', 'Incorporate'],
  },
];

export default function IncorporationPage() {
  const {
    companyType,
    region,
    dateOfIncorporation,
    sortBy,
    searchQuery,
    mobileMenuOpen,
    setCompanyType,
    setRegion,
    setDateOfIncorporation,
    setSortBy,
    setSearchQuery,
    setMobileMenuOpen,
  } = useStore();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);

const handleMobileProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setProfileMenuAnchorEl(event.currentTarget);
};

const handleMobileProfileMenuClose = () => {
  setProfileMenuAnchorEl(null);
};

  const MobileNavigation = () => (
    <Drawer
      anchor="top"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
            Menu
          </Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            sx={{
              justifyContent: 'flex-start',
              color: '#374151',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
              py: 1.5,
            }}
          >
            Manage company
          </Button>
          <Button
            sx={{
              justifyContent: 'flex-start',
              color: '#374151',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
              py: 1.5,
            }}
          >
            Company Secretary
          </Button>
          <Button
            sx={{
              justifyContent: 'flex-start',
              color: '#374151',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
              py: 1.5,
            }}
          >
            Incorporate Company
          </Button>
          <Button
            sx={{
              justifyContent: 'flex-start',
              color: '#374151',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
              py: 1.5,
            }}
          >
            Sign Documents
          </Button>
        </Box>
      </Box>
    </Drawer>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar sx={{ minHeight: { xs: '64px', md: '70px' }, justifyContent: 'space-between', px: { xs: 1, md: 4 } }}>
          <div className="flex items-center" style={{ paddingTop: isMobile ? '8px' : '24px' }}>
            <div className="flex items-center">
              <img 
                src="/logos/anycomp.png" 
                alt="ANYCOMP Logo" 
                style={{ width: isMobile ? '100px' : '120px', height: 'auto', marginRight: '12px' }}
              />
            </div>

             {isMobile && (
              <IconButton
                onClick={handleMobileMenuToggle}
                sx={{ mr: 10 }}
              >
                <MenuIcon sx={{ fontSize: 24, color: '#6b7280' }} />
              </IconButton>
            )}
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <Button 
                  sx={{ 
                    color: '#374151', 
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: 'Metropolis-Regular, var(--font-metropolis)', // Changed from SemiBold to Regular
                    fontWeight: 600,
                    '&:hover': { backgroundColor: 'transparent' }
                  }}
                  endIcon={<ArrowDownIcon sx={{ fontSize: 16 }} />}
                >
                  Manage company
                </Button>
                <Button 
                  sx={{ 
                    color: '#374151', 
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
                    '&:hover': { backgroundColor: 'transparent' }
                  }}
                  endIcon={<ArrowDownIcon sx={{ fontSize: 16 }} />}
                >
                  Company Secretary
                </Button>
                <Button 
                  sx={{ 
                    color: '#374151', 
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
                    '&:hover': { backgroundColor: 'transparent' }
                  }}
                  endIcon={<ArrowDownIcon sx={{ fontSize: 16 }} />}
                >
                  Incorporate Company
                </Button>
                <Button 
                  sx={{ 
                    color: '#374151', 
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
                    '&:hover': { backgroundColor: 'transparent' }
                  }}
                  endIcon={<ArrowDownIcon sx={{ fontSize: 16 }} />}
                >
                  Sign Documents
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3" style={{ paddingTop: isMobile ? '8px' : '24px' }}>
  {/* Mobile Menu Button - Only show hamburger menu on mobile */}
  {isMobile ? (
    <IconButton
      onClick={handleMobileProfileMenuOpen}
      sx={{ mr: 1 }}
    >
      <MenuIcon sx={{ fontSize: 24, color: '#6b7280' }} />
    </IconButton>
  ) : (
    /* Desktop User Profile Section */
    <div className="flex items-center space-x-1 bg-white rounded-full px-3 py-2 border border-gray-200 shadow-sm">
      <IconButton size="small" sx={{ p: 0.75, mr: 0.5 }}>
        <MenuIcon sx={{ fontSize: 18, color: '#6b7280' }} />
      </IconButton>
      <IconButton size="small" sx={{ p: 0.75, mr: 0.5 }}>
        <Badge 
          badgeContent="" 
          variant="dot" 
          sx={{ 
            '& .MuiBadge-dot': { 
              backgroundColor: '#ef4444', 
              width: 6, 
              height: 6,
              top: 3,
              right: 3
            } 
          }}
        >
          <NotificationsIcon sx={{ fontSize: 18, color: '#6b7280' }} />
        </Badge>
      </IconButton>
      <IconButton size="small" sx={{ p: 0.75, mr: 1 }}>
        <SettingsIcon sx={{ fontSize: 18, color: '#6b7280' }} />
      </IconButton>
      <Avatar sx={{ width: 32, height: 32, mr: 1.5 }} src="/api/placeholder/32/32" />
      <Typography 
        variant="body2" 
        sx={{ 
          color: '#374151', 
          fontSize: '13px', 
          fontWeight: 600,
          fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
          whiteSpace: 'nowrap' 
        }}
      >
        Joachim Berther
      </Typography>
    </div>
  )}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
             
            </Menu>

           {/* Mobile Profile Menu */}
            <Menu
              anchorEl={profileMenuAnchorEl}
              open={Boolean(profileMenuAnchorEl)}
              onClose={handleMobileProfileMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e5e7eb',
                  minWidth: '200px',
                }
              }}
            >
              {/* Profile Section */}
              <Box sx={{ p: 2, borderBottom: '1px solid #e5e7eb' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: 40, height: 40 }} src="/api/placeholder/40/40" />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#374151', 
                      fontSize: '14px', 
                      fontWeight: 600,
                      fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
                    }}
                  >
                    Joachim Berther
                  </Typography>
                </Box>
              </Box>
              
              {/* Menu Items */}
              <MenuItem onClick={handleMobileProfileMenuClose} sx={{ py: 1.5, px: 2 }}>
                <IconButton size="small" sx={{ p: 0, mr: 2 }}>
                  <Badge 
                    badgeContent="" 
                    variant="dot" 
                    sx={{ 
                      '& .MuiBadge-dot': { 
                        backgroundColor: '#ef4444', 
                        width: 6, 
                        height: 6,
                        top: 2,
                        right: 2
                      } 
                    }}
                  >
                    <NotificationsIcon sx={{ fontSize: 20, color: '#6b7280' }} />
                  </Badge>
                </IconButton>
                <Typography sx={{ fontFamily: 'Metropolis-Regular, var(--font-metropolis)', fontSize: '14px' }}>
                  Notifications
                </Typography>
              </MenuItem>
              
              <MenuItem onClick={handleMobileProfileMenuClose} sx={{ py: 1.5, px: 2 }}>
                <IconButton size="small" sx={{ p: 0, mr: 2 }}>
                  <SettingsIcon sx={{ fontSize: 20, color: '#6b7280' }} />
                </IconButton>
                <Typography sx={{ fontFamily: 'Metropolis-Regular, var(--font-metropolis)', fontSize: '14px' }}>
                  Settings
                </Typography>
              </MenuItem>
              
              <MenuItem onClick={handleMobileProfileMenuClose} sx={{ py: 1.5, px: 2 }}>
                <IconButton size="small" sx={{ p: 0, mr: 2 }}>
                  <AccountIcon sx={{ fontSize: 20, color: '#6b7280' }} />
                </IconButton>
                <Typography sx={{ fontFamily: 'Metropolis-Regular, var(--font-metropolis)', fontSize: '14px' }}>
                  Profile
                </Typography>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <MobileNavigation />

      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        {/* Search and Filter Section */}
        <div className="flex justify-center mb-6">
          {isMobile ? (
            // Mobile Search Layout
            <div className="w-full space-y-4">
              <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: '#6b7280', 
                        fontSize: '11px', 
                        fontWeight: 600,
                        fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
                        display: 'block', 
                        mb: 1 
                      }}
                    >
                      Company Type
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={companyType}
                        onChange={(e) => setCompanyType(e.target.value)}
                        sx={{ 
                          fontSize: '13px',
                          fontFamily: 'Metropolis-Thin, var(--font-metropolis)', 
                          '& .MuiSelect-select': { 
                            color: '#374151'
                          }
                        }}
                      >
                        <MenuItem value="Private Limited (SDN BHD)">Private Limited (SDN BHD)</MenuItem>
                        <MenuItem value="Public Limited">Public Limited</MenuItem>
                        <MenuItem value="LLP">LLP</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  
                  <div>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: '#6b7280', 
                        fontSize: '11px', 
                        fontWeight: 600,
                        fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
                        display: 'block', 
                        mb: 1 
                      }}
                    >
                      Region
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        sx={{ 
                          fontSize: '13px',
                          fontFamily: 'Metropolis-Thin, var(--font-metropolis)', 
                          '& .MuiSelect-select': { 
                            color: '#374151'
                          }
                        }}
                      >
                        <MenuItem value="Peninsular Malaysia (Mainland)">
                          Peninsular Malaysia (Mainland)
                        </MenuItem>
                        <MenuItem value="East Malaysia">East Malaysia</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  
                  <div>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: '#6b7280', 
                        fontSize: '11px', 
                        fontWeight: 600,
                        fontFamily: 'Metropolis-SemiBold, var(--font-metropolis)',
                        display: 'block', 
                        mb: 1 
                      }}
                    >
                      Date of completion
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={dateOfIncorporation}
                        onChange={(e) => setDateOfIncorporation(e.target.value)}
                        sx={{ 
                          fontSize: '13px',
                          fontFamily: 'Metropolis-Thin, var(--font-metropolis)', 
                          '& .MuiSelect-select': { 
                            color: '#374151'
                          }
                        }}
                      >
                        <MenuItem value="17th Feb (3 Days)">17th Feb (3 Days)</MenuItem>
                        <MenuItem value="Within a Week">Within a Week</MenuItem>
                        <MenuItem value="Within a Month">Within a Month</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  
                  <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                    fullWidth
                    sx={{
                      backgroundColor: '#1e40af',
                      borderRadius: '8px',
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                      '&:hover': {
                        backgroundColor: '#1d4ed8'
                      }
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Desktop Search Layout
            <div className="bg-white rounded-full shadow-xl px-2 py-2 flex items-center" style={{ maxWidth: '900px', width: '100%', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', border: '2px solid #e5e7eb' }}>
              <div className="flex-1 px-4 py-2">
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#6b7280', 
                    fontSize: '11px', 
                    fontWeight: 600,
                    fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                    display: 'block', 
                    mb: 0.5 
                  }}
                >
                  Company Type
                </Typography>
                <FormControl size="small" fullWidth variant="standard">
                  <Select
                    value={companyType}
                    onChange={(e) => setCompanyType(e.target.value)}
                    disableUnderline
                    sx={{ 
                      fontSize: '13px', 
                      fontWeight: 100,
                      fontFamily: 'Metropolis-Thin, var(--font-metropolis)',
                      '& .MuiSelect-select': { 
                        padding: 0,
                        color: '#374151'
                      }
                    }}
                  >
                    <MenuItem value="Private Limited (SDN BHD)">Private Limited (SDN BHD)</MenuItem>
                    <MenuItem value="Public Limited">Public Limited</MenuItem>
                    <MenuItem value="LLP">LLP</MenuItem>
                  </Select>
                </FormControl>
              </div>
              
              <div className="w-px h-12 bg-gray-300"></div>
              
              <div className="flex-1 px-4 py-2">
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#6b7280', 
                    fontSize: '11px', 
                    fontWeight: 600,
                    fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                    display: 'block', 
                    mb: 0.5 
                  }}
                >
                  Region
                </Typography>
                <FormControl size="small" fullWidth variant="standard">
                  <Select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    disableUnderline
                    sx={{ 
                      fontSize: '13px', 
                      fontWeight: 100,
                      fontFamily: 'Metropolis-Thin, var(--font-metropolis)',
                      '& .MuiSelect-select': { 
                        padding: 0,
                        color: '#374151'
                      }
                    }}
                  >
                    <MenuItem value="Peninsular Malaysia (Mainland)">
                      Peninsular Malaysia (Mainland)
                    </MenuItem>
                    <MenuItem value="East Malaysia">East Malaysia</MenuItem>
                  </Select>
                </FormControl>
              </div>
              
              <div className="w-px h-12 bg-gray-300"></div>
              
              <div className="flex-1 px-4 py-2">
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#6b7280', 
                    fontSize: '11px', 
                    fontWeight: 600,
                    fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                    display: 'block', 
                    mb: 0.5 
                  }}
                >
                  Date of completion
                </Typography>
                <FormControl size="small" fullWidth variant="standard">
                  <Select
                    value={dateOfIncorporation}
                    onChange={(e) => setDateOfIncorporation(e.target.value)}
                    disableUnderline
                    sx={{ 
                      fontSize: '13px', 
                      fontWeight: 100,
                      fontFamily: 'Metropolis-Thin, var(--font-metropolis)',
                      '& .MuiSelect-select': { 
                        padding: 0,
                        color: '#374151'
                      }
                    }}
                  >
                    <MenuItem value="17th Feb (3 Days)">17th Feb (3 Days)</MenuItem>
                    <MenuItem value="Within a Week">Within a Week</MenuItem>
                    <MenuItem value="Within a Month">Within a Month</MenuItem>
                  </Select>
                </FormControl>
              </div>
              
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                  backgroundColor: '#1e40af',
                  borderRadius: '25px',
                  px: 3,
                  py: 1.5,
                  mr: 1,
                  textTransform: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                  minWidth: '120px',
                  '&:hover': {
                    backgroundColor: '#1d4ed8'
                  }
                }}
              >
                Search
              </Button>
            </div>
          )}
        </div>
        
        {/* Horizontal line */}
        <div className="w-full border-t border-gray-200 mb-8"></div>

        {/* Results Header */}
        <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'justify-between items-center'} mb-6`}>
          <div>
            <Typography 
              variant={isMobile ? "h5" : "h4"} 
              sx={{
                fontWeight: 600,
                fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                color: '#111827',
                mb: 2
              }}
            >
              Incorporate new company
            </Typography>
            <Typography 
              variant="body1" 
              sx={{
                fontWeight: 400,
                fontFamily: 'Metropolis-Thin, var(--font-metropolis)',
                color: '#6b7280'
              }}
            >
              Over 350 Company Secretary ready to assist you
            </Typography>
          </div>
          
          <div className={`flex items-center ${isMobile ? 'justify-between' : 'space-x-8'}`}>
            <Button
              endIcon={<ArrowDownIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: '#374151',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: 'Metropolis-Regular, var(--font-metropolis)',
                backgroundColor: 'transparent',
                border: 'none',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
              }}
            >
              Sort by: {sortBy}
            </Button>
            <Button
              endIcon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10,18H14V16H10V18M3,6V8H21V6H3M6,13H18V11H6V13Z"/>
                </svg>
              }
              sx={{
                color: '#374151',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                backgroundColor: 'transparent',
                border: 'none',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
              }}
            >
              Filter
            </Button>
          </div>
        </div>

        {/* Company Cards */}
        <Grid container spacing={3}>
          {companies.map((company) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={company.id}>
              <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                <div 
                  className="h-32 bg-white flex items-center justify-center relative border-b border-gray-100"
                  style={{
                    backgroundImage: `url(${company.logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
                
                <CardContent className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontWeight: 600,
                          color: '#111827',
                          fontSize: '16px',
                          fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                          lineHeight: 1.2,
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {company.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{
                          fontWeight: 600,
                          fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                          color: '#6b7280',
                          fontSize: '12px'
                        }}
                      >
                        {company.subtitle}
                      </Typography>
                    </div>
                   <div className="flex items-center ml-2">
                      <Typography 
                        variant="body2" 
                        sx={{
                          fontWeight: 600,
                          fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                          color: '#111827',
                          fontSize: '14px',
                          mr: 0.5
                        }}
                      >
                        {company.rating}
                      </Typography>
                      <StarIcon sx={{ 
                        color: '#1d4ed8', 
                        fontSize: 16,
                        transform: 'translateY(-2px)'
                      }} />
                    </div>
                  </div>
                  
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: '#6b7280',
                      mb: 3,
                      fontSize: '13px',
                      fontFamily: 'Metropolis-Regular, var(--font-metropolis)',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {company.description}
                  </Typography>
                  
                  <div className="mb-3">
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: '#6b7280',
                        fontSize: '12px',
                        fontFamily: 'Metropolis-Regular, var(--font-metropolis)',
                        mb: 1
                      }}
                    >
                      Complete in {company.completionDays} working days
                    </Typography>
                    <div className="flex items-center justify-between">
                      <div>
                        <Typography 
                          variant="h6" 
                          sx={{
                            fontWeight: 600,
                            fontFamily: 'Metropolis-Bold, var(--font-metropolis)',
                            color: '#111827',
                            fontSize: '18px'
                          }}
                        >
                          {company.price}
                        </Typography>
                       
                      </div>
                      <Typography 
                        variant="body2" 
                        sx={{
                          color: '#6b7280',
                          fontSize: '12px',
                          fontFamily: 'Metropolis-Regular, var(--font-metropolis)',
                        }}
                      >
                        ({company.clientCount} clients)
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center gap-2">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        fontSize: '12px',
                        fontFamily: 'Metropolis-Regular, var(--font-metropolis)',
                        fontWeight: 400,
                        backgroundColor: '#374151',
                        color: '#ffffff',
                        borderRadius: '20px',
                        px: 3,
                        py: 1,
                        minWidth: 'auto',
                        flex: 1,
                        '&:hover': {
                          backgroundColor: '#4b5563'
                        }
                      }}
                    >
                      Message
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        fontSize: '12px',
                        fontFamily: 'Metropolis-Regular, var(--font-metropolis)',
                        fontWeight: 400,
                        backgroundColor: '#1e40af',
                        borderRadius: '20px',
                        px: 3,
                        py: 1,
                        flex: 1,
                        '&:hover': {
                          backgroundColor: '#1d4ed8'
                        }
                      }}
                    >
                      Incorporate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}