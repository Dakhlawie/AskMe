import React from 'react';
import footer from'./footer';
import navbar from './navbar';
function Users(){
    return(<div>
        <header>{navbar()}</header>
        <section class="hero-area bg-white shadow-sm pt-80px pb-80px">
    <span class="icon-shape icon-shape-1"></span>
    <span class="icon-shape icon-shape-2"></span>
    <span class="icon-shape icon-shape-3"></span>
    <span class="icon-shape icon-shape-4"></span>
    <span class="icon-shape icon-shape-5"></span>
    <span class="icon-shape icon-shape-6"></span>
    <span class="icon-shape icon-shape-7"></span>
    <div class="container">
        <div class="hero-content text-center">
            <h2 class="section-title pb-3">List of Users</h2>
            <ul class="breadcrumb-list">
                <li><a href="#">Home</a><span><svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 0 24 24" width="19px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg></span></li>
                <li>List of Users</li>
            </ul>
        </div>
    </div>
</section>
<section class="wishlist-area pt-80px pb-80px position-relative">
    <div class="container">
        <form action="#" class="cart-form table-responsive px-2">
            <h3 class="fs-22 pb-4 fw-bold"> List</h3>
            <table class="table generic-table">
                <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                    <th scope="col">Remove</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                        <div class="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 bg-transparent">
                           
                            <div class="media-body">
                                <h5 class="fs-15 fw-medium"><a href="#">Chocolate bar</a></h5>
                            </div>
                        </div>
                    </th>
                    <td>$22</td>
                    <td>In Stock</td>
                    <td>
                        <a href="#" class="btn theme-btn theme-btn-sm">Update User</a>
                    </td>
                    <td>
                        <a href="#" class="icon-element icon-element-xs shadow-sm" data-toggle="tooltip" data-placement="top" title="Remove item"><i class="la la-times"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div>
</section>
        <footer>{footer()}</footer>
    </div>);
}
export default Users;