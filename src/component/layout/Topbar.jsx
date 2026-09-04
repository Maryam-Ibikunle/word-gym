import { GiOpenBook, GiRamProfile, GiHeadShot,} from 'react-icons/gi'
import {User} from 'lucide-react'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
      <header className="fixed lg:hidden top-0 z-50 w-full h-16 bg-background shadow-sm flex items-center justify-between px-4 antialiased">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <GiOpenBook className="h-7 w-7 text-white" />
          </div>
  
          <h1 className="font-sans text-3xl font-semibold text-primary">
            WordGym
          </h1>
        </Link>
  
        {/* Profile */}
        <Link
          to="/profile"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
        >
          <User className="h-7 w-7 text-white"  />
        </Link>
      </header> 
    )
  }

export default Topbar