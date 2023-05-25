import React from "react";
import { TableWrapper } from "../style";

const RobootManagement = () => {
  return (
    <TableWrapper>
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-12">
            <table id="example" class="table table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" class="checkthis" />
                  </th>

                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <input type="checkbox" class="checkthis" />
                  </th>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" class="checkthis" />
                  </th>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" class="checkthis" />
                  </th>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>$86,000</td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" class="checkthis" />
                  </th>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td>$433,060</td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" class="checkthis" />
                  </th>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </TableWrapper>
  );
};

export default RobootManagement;
