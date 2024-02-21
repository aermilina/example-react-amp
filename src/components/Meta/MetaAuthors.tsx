import React from "react";
import { Author } from "../../types";
import { Helmet } from "react-helmet-async";

interface Props {
  authors?: Author[];
}

export default function MetaAuthors({ authors }: Props) {
  const authorName =
    authors &&
    authors.map((author) => {
      return author.name;
    });
  if (authors && authorName) {
    return (
      <Helmet>
        <meta name="author" content={`${[...authorName]}|За рулем`} />
      </Helmet>
    );
  }
  return (
    <Helmet>
      <meta name="author" content="За рулем" />
    </Helmet>
  );
}
