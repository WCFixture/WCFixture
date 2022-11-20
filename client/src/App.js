import { Routes, Route, BrowserRouter } from "react-router-dom"
import Fixture from './Components/Fixture/Fixture';
import PickEm from './Components/Prode/PickEm';
import PickEmMobile from './Components/Prode/PickEmMobile';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Sidebar from "./Components/SideBar/Sidebar";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import { HStack, VStack } from '@chakra-ui/react'
import SidebarMobile from "./Components/SideBar/SidebarMobile";
import { useMediaQuery } from "@chakra-ui/react"

function App() {

  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')


  return (

    <BrowserRouter>
      {isLargerThan900 ? <HStack alignItems={"flex-start"} spacing='24px'> <Sidebar /> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/pickem" element={<PickEm />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes> </HStack> : <VStack spacing='24px'> <SidebarMobile /> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/pickem" element={<PickEmMobile />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes> </VStack>}
    </BrowserRouter>

  );
}

export default App;
