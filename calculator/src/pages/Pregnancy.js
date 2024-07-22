import React, { useState } from "react";
import {
  Box,
  Select,
  Input,
  Heading,
  FormControl,
  Button,
  Text,
  VStack,
  FormLabel,
} from "@chakra-ui/react";
import { format, addDays, differenceInDays } from "date-fns";

const PregnancyCalculator = () => {
  const [method, setMethod] = useState("lastPeriod");
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [conceptionDate, setConceptionDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [calculatedDueDate, setCalculatedDueDate] = useState("");
  const [gestationalAge, setGestationalAge] = useState("");

  const calculateDueDate = () => {
    let dueDate = null;

    switch (method) {
      case "lastPeriod":
        if (lastPeriodDate) {
          const lmpDate = new Date(lastPeriodDate);
          dueDate = addDays(lmpDate, cycleLength + 280 - 28);
        }
        break;

      case "conceptionDate":
        if (conceptionDate) {
          const conception = new Date(conceptionDate);
          dueDate = addDays(conception, 266);
        }
        break;

      case "dueDate":
        if (dueDate) {
          dueDate = new Date(dueDate);
        }
        break;

      default:
        break;
    }

    if (dueDate) {
      const today = new Date();
      const gestationalAgeInWeeks = Math.floor(
        differenceInDays(today, addDays(dueDate, -266)) / 7
      );

      setCalculatedDueDate(format(dueDate, "MMMM dd, yyyy"));
      setGestationalAge(`${gestationalAgeInWeeks} weeks`);
    }
  };

  return (
    <Box bg="background.100" p={8}>
      <Heading mb={6}>Pregnancy Calculator</Heading>
      <Text mb={6}>
        Calculate your Estimated Due Date and Gestational Age using the
        Pregnancy Calculator.
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
          <FormControl id="method">
            <FormLabel>Calculation Method</FormLabel>
            <Select
              mb={4}
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="lastPeriod">Last Period</option>
              <option value="conceptionDate">Conception Date</option>
              <option value="dueDate">Due Date</option>
            </Select>
          </FormControl>

          {method === "lastPeriod" && (
            <FormControl id="method-1">
              <FormLabel>Last Menstrual Period Date</FormLabel>
              <Input
                type="date"
                placeholder="Last Menstrual Period Date"
                value={lastPeriodDate}
                onChange={(e) => setLastPeriodDate(e.target.value)}
                mb={4}
              />

              <FormLabel>Average Cycle Length</FormLabel>
              <Input
                type="number"
                placeholder="Average Cycle Length"
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
                mb={4}
              />
            </FormControl>
          )}

          {method === "conceptionDate" && (
            <FormControl id="method-2">
              <FormLabel>Conception Date</FormLabel>
              <Input
                type="date"
                placeholder="Conception Date"
                value={conceptionDate}
                onChange={(e) => setConceptionDate(e.target.value)}
                mb={4}
              />
            </FormControl>
          )}
          {method === "dueDate" && (
            <FormControl id="method-3">
              <FormLabel>Due Date</FormLabel>
              <Input
                type="date"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                mb={4}
              />
            </FormControl>
          )}
          <Button colorScheme="green" onClick={calculateDueDate}>
            Calculate
          </Button>
          {calculatedDueDate && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
              Estimated Due Date: {calculatedDueDate}
            </Text>
          )}
          {gestationalAge && (
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Gestational Age: {gestationalAge}
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default PregnancyCalculator;
