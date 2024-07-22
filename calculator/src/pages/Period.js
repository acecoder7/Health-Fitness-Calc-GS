import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Select,
} from "@chakra-ui/react";

const PeriodCalculator = () => {
  const [lastPeriodLength, setLastPeriodLength] = useState("");
  const [firstDayAfterFirstPeriod, setFirstDayAfterFirstPeriod] = useState("");
  const [averageCycleLength, setAverageCycleLength] = useState("");
  const [nextPeriodDate, setNextPeriodDate] = useState(null);
  const [ovulationDate, setOvulationDate] = useState(null);

  const calculateNextPeriod = () => {
    const firstDayDate = new Date(firstDayAfterFirstPeriod);
    const cycleDuration = parseInt(averageCycleLength, 10);

    if (!isNaN(firstDayDate) && !isNaN(cycleDuration)) {
      const nextPeriod = new Date(firstDayDate);
      nextPeriod.setDate(nextPeriod.getDate() + cycleDuration);
      setNextPeriodDate(nextPeriod.toDateString());

      const ovulation = new Date(nextPeriod);
      ovulation.setDate(ovulation.getDate() - 14);
      setOvulationDate(ovulation.toDateString());
    }
  };

  return (
    <Box bg="background.100" p={8}>
      <Heading mb={6}>Period Calculator</Heading>
      <Text mb={6}>
        Calculate your next period and ovulation date
      </Text>
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxWidth="700px"
        mx="auto"
        mb={14}
      >
        <VStack spacing={4}>
          <FormControl id="lastPeriodLength">
            <FormLabel>Last period length (in days)</FormLabel>
            <Select
              placeholder="Select period length"
              value={lastPeriodLength}
              onChange={(e) => setLastPeriodLength(e.target.value)}
            >
              {[...Array(10).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="firstDayAfterFirstPeriod">
            <FormLabel>First day after your last period</FormLabel>
            <Input
              type="date"
              value={firstDayAfterFirstPeriod}
              onChange={(e) => setFirstDayAfterFirstPeriod(e.target.value)}
              placeholder="Enter the date"
            />
          </FormControl>

          <FormControl id="averageCycleLength">
            <FormLabel>Average length of your cycle (in days)</FormLabel>
            <Input
              type="number"
              value={averageCycleLength}
              onChange={(e) => setAverageCycleLength(e.target.value)}
              placeholder="Enter the length of your cycle"
            />
          </FormControl>

          <Button onClick={calculateNextPeriod} colorScheme="green">
            Calculate
          </Button>

          {nextPeriodDate && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
            Your next period is expected to start on: {nextPeriodDate}
          </Text>
          )}
          {ovulationDate && (
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Your ovulation date is expected to be: {ovulationDate}
              </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default PeriodCalculator;
