import React from "react";
import PropTypes from "prop-types";

Pagonation.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagonation.defaultProps = {
  onPageChange: null,
};

function Pagonation(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div style={{ display: "inline-block" }}>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <h5>{_page}</h5>
      <button
        disabled={_page >= totalPage}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagonation;
