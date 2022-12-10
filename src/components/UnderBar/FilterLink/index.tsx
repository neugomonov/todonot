import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const FilterLink: React.FC = () => {
  const { asPath } = useRouter();
  return (
    <ul className="filters">
      <li>
        <Link
          data-cy="all-filter"
          className={asPath === "/" ? "selected" : ""}
          href="/"
        >
          All
        </Link>
      </li>
      <li>
        <Link
          data-cy="active-filter"
          className={asPath === "/active" ? "selected" : ""}
          href="/"
          as="active"
        >
          Active
        </Link>
      </li>
      <li>
        <Link
          data-cy="completed-filter"
          className={asPath === "/completed" ? "selected" : ""}
          href="/"
          as="/completed"
        >
          Completed
        </Link>
      </li>
    </ul>
  );
};

export default FilterLink;
