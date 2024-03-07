import { useState } from "react";
import { Box, Button, Heading, Text, Image, Select, Input, Stack, Flex } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState("home"); // home, create, browse
  const [eventType, setEventType] = useState(""); // existing, outdoor
  const [participants, setParticipants] = useState(1);
  const [gender, setGender] = useState("");
  const [paymentOption, setPaymentOption] = useState("");

  const handleLogin = () => {
    // TODO: Implement Google login
    setIsLoggedIn(true);
  };

  const handleCreateEvent = (type) => {
    setEventType(type);
    setView("create");
  };

  const renderHomeView = () => (
    <Stack spacing={8}>
      <Heading>Welcome to the Event Planner</Heading>
      {!isLoggedIn && (
        <Stack>
          <Button leftIcon={<FaGoogle />} onClick={handleLogin}>
            Sign Up / Login with Google
          </Button>
          <Button onClick={() => setView("browse")}>Browse Events</Button>
        </Stack>
      )}
      {isLoggedIn && (
        <Stack>
          <Button onClick={() => handleCreateEvent("existing")}>Join an Existing Event</Button>
          <Button onClick={() => handleCreateEvent("outdoor")}>Create an Outdoor Event</Button>
        </Stack>
      )}
    </Stack>
  );

  const renderBrowseView = () => (
    <Box>
      <Heading mb={8}>Upcoming Events</Heading>
      <Image src="https://images.unsplash.com/photo-1674574124345-02c525664b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBtYXAlMjB3aXRoJTIwZXZlbnQlMjBtYXJrZXJzfGVufDB8fHx8MTcwOTgwMDg0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Event map" />
      <Text>Showing events for the next 3 days. Login to join events.</Text>
    </Box>
  );

  const renderCreateView = () => (
    <Stack spacing={6}>
      <Heading>Create a New Event</Heading>

      {eventType === "outdoor" && (
        <Stack>
          <Select placeholder="Number of Participants" value={participants} onChange={(e) => setParticipants(e.target.value)}>
            <option value="1">Just me</option>
            <option value="2">Me + 1 friend</option>
            <option value="3">Me + 2 friends</option>
          </Select>

          <Select placeholder="Preferred Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="any">No preference</option>
          </Select>

          <Select placeholder="Payment Option" value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)}>
            <option value="individual">Everyone pays individually</option>
            <option value="split">Split 50/50</option>
            <option value="organizer">I'll pay</option>
            <option value="participants">Participants pay</option>
          </Select>
        </Stack>
      )}

      <Flex>
        <Input placeholder="Search for a venue..." />
        <Button ml={4}>Search</Button>
      </Flex>

      <Box h={400} borderWidth={1}>
        Google Map goes here
      </Box>

      <Button onClick={() => setView("home")}>Create Event</Button>
    </Stack>
  );

  return (
    <Box maxW={800} mx="auto" mt={8} p={8} borderWidth={1} borderRadius="lg">
      {view === "home" && renderHomeView()}
      {view === "browse" && renderBrowseView()}
      {view === "create" && renderCreateView()}
    </Box>
  );
};

export default Index;
