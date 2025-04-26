import CategoryBar from "@/components/CategoryBar";
import ListContainer from "@/components/ListContainer";

function Home() {
  return (
    <>
      {/* <Tabs
        defaultIndex={0}
        onChange={(index) => {
          console.log(index);
        }}
        className="tabs"
      >
        <Tab title="tab1">Content1</Tab>
        <Tab title="tab2">Content23s2</Tab>
        <Tab title="tab3">Content3</Tab>
        <Tab title="tab4">Content4</Tab>
        <Tab title="tab5">Content5</Tab>
      </Tabs>

      <Accordion
        defaultIndex={0}
        onChange={(index) => console.log(index)}
        collapseOthers={true}
      >
        <AccordionItem header="Accordion 1">Nội dung 1</AccordionItem>
        <AccordionItem header="Accordion 2">Nội dung 2</AccordionItem>
        <AccordionItem header="Accordion 3">Nội dung 3</AccordionItem>
      </Accordion> */}
      <CategoryBar />
      <ListContainer />
    </>
  );
}
export default Home;
