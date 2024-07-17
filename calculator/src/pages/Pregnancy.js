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
import { format, addDays, addWeeks, differenceInDays } from "date-fns";

const PregnancyCalculator = () => {
  const [method, setMethod] = useState("lastPeriod");
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [conceptionDate, setConceptionDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [result, setResult] = useState("");

  const calculateDueDate = () => {
    let calculatedDueDate = null;

    switch (method) {
      case "lastPeriod":
        if (lastPeriodDate) {
          const lmpDate = new Date(lastPeriodDate);
          calculatedDueDate = addDays(lmpDate, cycleLength + 280 - 28);
        }
        break;

      case "conceptionDate":
        if (conceptionDate) {
          const conception = new Date(conceptionDate);
          calculatedDueDate = addDays(conception, 266);
        }
        break;

      case "dueDate":
        if (dueDate) {
          calculatedDueDate = new Date(dueDate);
        }
        break;

      default:
        break;
    }

    if (calculatedDueDate) {
      const today = new Date();
      const gestationalAge = differenceInDays(today, calculatedDueDate) / 7;

      setResult(`Estimated Due Date: ${format(
        calculatedDueDate,
        "MMMM dd, yyyy"
      )}
                 Gestational Age: ${Math.floor(gestationalAge)} weeks`);
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
          {result && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
              {result}
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default PregnancyCalculator;
