import React from 'react';
import './sidebar.css';

class SideBar extends React.Component {
	render = () => {
		return (
			<div className="sidebar sidebar-light sidebar-main sidebar-expand-md align-self-start">

				<div className="sidebar-mobile-toggler text-center">
					<a href="#" className="sidebar-mobile-main-toggle">
						<i className="icon-arrow-left8"></i>
					</a>
					Main sidebar
					<a href="#" className="sidebar-mobile-expand">
						<i className="icon-screen-full"></i>
						<i className="icon-screen-normal"></i>
					</a>
				</div>


				<div className="sidebar-content">

					<div className="sidebar-user-material">
						<div className="sidebar-user-material-body card-img-top">
							<div className="card-body text-center">
								<a href="#">
									<img src="../../../../global_assets/images/image.png" className="img-fluid rounded-circle shadow-2 mb-3" width="80" height="80" alt=""/>
								</a>
								<h6 className="mb-0 text-white text-shadow-dark">Victoria Baker</h6>
								<span className="font-size-sm text-white text-shadow-dark">Santa Ana, CA</span>
							</div>
														
							<div className="sidebar-user-material-footer">
								<a href="#user-nav" className="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle" data-toggle="collapse"><span>My account</span></a>
							</div>
						</div>

						<div className="collapse" id="user-nav">
							<ul className="nav nav-sidebar">
								<li className="nav-item">
									<a href="#" className="nav-link">
										<i className="icon-user-plus"></i>
										<span>My profile</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">
										<i className="icon-coins"></i>
										<span>My balance</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">
										<i className="icon-comment-discussion"></i>
										<span>Messages</span>
										<span className="badge bg-success-400 badge-pill align-self-center ml-auto">58</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">
										<i className="icon-cog5"></i>
										<span>Account settings</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">
										<i className="icon-switch2"></i>
										<span>Logout</span>
									</a>
								</li>
							</ul>
						</div>
					</div>


					<div className="card card-sidebar-mobile">
						<div className="card-header header-elements-inline">
							<h6 className="card-title">Navigation</h6>
							<div className="header-elements">
								<div className="list-icons">
									<a className="list-icons-item" data-action="collapse"></a>
								</div>
							</div>
						</div>

						<div className="card-body p-0">
							<ul className="nav nav-sidebar" data-nav-type="accordion">

								<li className="nav-item-header pt-0 mt-0"><div className="text-uppercase font-size-xs line-height-xs">Main</div> <i className="icon-menu" title="Main"></i></li>
								<li className="nav-item">
									<a href="../full/index.html" className="nav-link">
										<i className="icon-home4"></i>
										<span>Dashboard</span>
									</a>
								</li>
								<li className="nav-item nav-item-submenu nav-item-expanded nav-item-open">
									<a href="#" className="nav-link"><i className="icon-stack"></i> <span>Starter kit</span></a>

									<ul className="nav nav-group-sub" data-submenu-title="Starter kit">
										<li className="nav-item"><a href="../seed/layout_nav_horizontal.html" className="nav-link">Horizontal navigation</a></li>
										<li className="nav-item"><a href="../seed/sidebar_none.html" className="nav-link">No sidebar</a></li>
										<li className="nav-item"><a href="../seed/sidebar_main.html" className="nav-link active">1 sidebar</a></li>
										<li className="nav-item nav-item-submenu">
											<a href="#" className="nav-link">2 sidebars</a>
											<ul className="nav nav-group-sub">
												<li className="nav-item"><a href="../seed/sidebar_secondary.html" className="nav-link">Secondary sidebar</a></li>
												<li className="nav-item"><a href="../seed/sidebar_right.html" className="nav-link">Right sidebar</a></li>
											</ul>
										</li>
										<li className="nav-item nav-item-submenu">
											<a href="#" className="nav-link">3 sidebars</a>
											<ul className="nav nav-group-sub">
												<li className="nav-item"><a href="../seed/sidebar_right_hidden.html" className="nav-link">Right sidebar hidden</a></li>
												<li className="nav-item"><a href="../seed/sidebar_right_visible.html" className="nav-link">Right sidebar visible</a></li>
											</ul>
										</li>
										<li className="nav-item"><a href="../seed/sidebar_sections.html" className="nav-link">Sectioned sidebar</a></li>
										<li className="nav-item"><a href="../seed/sidebar_stretched.html" className="nav-link">Stretched sidebar</a></li>
										<li className="nav-item-divider"></li>
										<li className="nav-item"><a href="../seed/navbar_fixed_main.html" className="nav-link">Fixed main navbar</a></li>
										<li className="nav-item"><a href="../seed/navbar_fixed_secondary.html" className="nav-link">Fixed secondary navbar</a></li>
										<li className="nav-item"><a href="../seed/navbar_fixed_both.html" className="nav-link">Both navbars fixed</a></li>
										<li className="nav-item"><a href="../seed/layout_boxed.html" className="nav-link">Boxed layout</a></li>
									</ul>
								</li>
								<li className="nav-item">
									<a href="../full/changelog.html" className="nav-link">
										<i className="icon-list-unordered"></i>
										<span>Changelog</span>
										<span className="badge bg-blue-400 align-self-center ml-auto">2.3</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;