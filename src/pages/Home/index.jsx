import CategoryBar from "@/components/CategoryBar";
import ListContainer from "@/components/ListContainer";
import { Tab, Tabs } from "@/components/Tabs";

import React, { useEffect, useState } from "react";
import Products from "../Products";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Accordion from "@/components/Accordion/Accordion";

function Home() {
  // const [url, setUrl] = useState();

  // useEffect(() => {
  //   return () => {
  //     URL.revokeObjectURL(url);
  //   };
  // }, []);
  // const ulELe = React.createElement(
  //   "ul",
  //   { className: "course-list" },
  //   React.createElement(
  //     "li",
  //     { className: "course-item" },
  //     React.createElement("a", { href: "/course/1" }, "html")
  //   ),
  //   React.createElement(
  //     "li",
  //     { className: "course-item" },
  //     React.createElement("a", { href: "/course/2" }, "css")
  //   ),
  //   React.createElement(
  //     "li",
  //     { className: "course-item" },
  //     React.createElement("a", { href: "/course/3" }, "js")
  //   )
  // );

  // const course = [
  //   {
  //     id: 1,
  //     name: "Html",
  //   },
  //   {
  //     id: 2,
  //     name: "Html1",
  //   },
  //   {
  //     id: 3,
  //     name: "Html2",
  //   },
  // ];

  return (
    <>
      <Tabs
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
      </Accordion>
      <CategoryBar />
      <ListContainer />
    </>
  );

  <></>;

  //vi du cho reactElements
  // React.createElement(
  //   "ul",
  //   { className: "course-list" },
  //   course.map((c) =>
  //     React.createElement(
  //       "li",
  //       { className: "course-item", key: c.id },
  //       React.createElement("a", { href: `course/${c.id}` }, c.name)
  //     )
  //   )
  // );
}
export default Home;
