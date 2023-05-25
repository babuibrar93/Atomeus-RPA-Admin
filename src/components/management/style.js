import { styled } from "styled-components";

export const TableWrapper = styled.div`
  .btn-group .btn {
    transition: background-color 0.3s ease;
  }

  .panel-table .panel-body {
    padding: 0;
  }

  .table > thead > tr > th {
    border-bottom: none;
    color: white;
  }

  .panel-footer,
  .panel-table .panel-body .table-bordered {
    border-style: none;
    margin: 0;
  }

  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {
    text-align: center;
    width: 50px;
    color: white;

  }

  .panel-table .panel-body .table-bordered > thead > tr > th.col-tools {
    text-align: center;
    width: 120px;
  }

  .panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,
  .panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {
    border-right: 0;
    color: white;
  }

  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,
  .panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {
    border-left: 0;
    color: white;

  }

  .panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td {
    border-bottom: 0;
    color: white;

  }

  .panel-table .panel-body .table-bordered > thead > tr:first-of-type > th {
    border-top: 0;
    color: white;

  }

  .pagination > li > a,
  .pagination > li > span {
    border-radius: 50% !important;
    margin: 0 5px;
    color: white;

  }

  .pagination {
    margin: 0;
    color: white;

  }
`;
