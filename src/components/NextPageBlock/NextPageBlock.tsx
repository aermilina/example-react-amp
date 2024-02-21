import React from "react";
import { Story } from "../../types";
import Footer from "../Footer";

interface Props {
  announcements?: Story[];
  topics?: Story[];
  id: number;
  serverName: string;
}

export default function NextPageBlock({ serverName }: Props) {
  return (
    <amp-next-page src={`http://${serverName}`}>
      <Footer />
    </amp-next-page>
  );
}
