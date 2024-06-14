import React, { useState } from "react";
import { Container, Box, Button, VStack, HStack, Text } from "@chakra-ui/react";
import Tree from "react-d3-tree";

const initialData = {
  name: "Root",
  children: [
    {
      name: "Child 1",
      children: [{ name: "Child 1.1" }, { name: "Child 1.2" }],
    },
    {
      name: "Child 2",
      children: [{ name: "Child 2.1" }, { name: "Child 2.2" }],
    },
  ],
};

const Index = () => {
  const [treeData, setTreeData] = useState(initialData);

  const addNode = (node) => {
    const newNode = { name: `New Node ${Math.random().toFixed(2)}` };
    if (!node.children) {
      node.children = [];
    }
    node.children.push(newNode);
    setTreeData({ ...treeData });
  };

  const handleNodeClick = (nodeData) => {
    addNode(nodeData);
  };

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Monte Carlo Tree Search Viewer</Text>
        <Box width="100%" height="600px" border="1px solid #ccc" borderRadius="md" overflow="hidden">
          <Tree
            data={treeData}
            orientation="vertical"
            translate={{ x: 400, y: 50 }}
            onNodeClick={(nodeData) => handleNodeClick(nodeData.data)}
            zoomable
            collapsible={false}
            styles={{
              links: {
                stroke: "#ccc",
                strokeWidth: 2,
              },
              nodes: {
                node: {
                  circle: {
                    fill: "#fff",
                    stroke: "#000",
                    strokeWidth: 3,
                  },
                  name: {
                    stroke: "#000",
                    strokeWidth: 1,
                  },
                },
                leafNode: {
                  circle: {
                    fill: "#fff",
                    stroke: "#000",
                    strokeWidth: 3,
                  },
                  name: {
                    stroke: "#000",
                    strokeWidth: 1,
                  },
                },
              },
            }}
          />
        </Box>
        <HStack spacing={4}>
          <Button onClick={() => setTreeData(initialData)}>Reset Tree</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;