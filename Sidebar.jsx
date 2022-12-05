import React from "react";

function Sidebar (){
    return(
        <div>
            <nav class="sidebar card py-2 mb-4">
<ul class="nav flex-column">
	<li class="nav-item">
		<a class="nav-link" href="#"> Link name </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#"> Submenu links <b class="float-end">&raquo;</b> </a>
		<ul class="submenu dropdown-menu">
			<li><a class="nav-link" href="#">Submenu item 1 </a></li>
		    <li><a class="nav-link" href="#">Submenu item 2 </a></li>
		    <li><a class="nav-link" href="#">Submenu item 3 </a>
		    </li>
		</ul>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#"> Treeview category <b class="float-end">&raquo;</b> </a>
		<ul class="submenu dropdown-menu">
			<li><a class="nav-link" href="#">Submenu item 1 </a></li>
		    <li><a class="nav-link" href="#">Submenu item 2 </a></li>
		    <li><a class="nav-link" href="#">Submenu item 3 <b class="float-end">&raquo;</b> </a>
		    	<ul class="submenu dropdown-menu">
				    <li><a class="nav-link" href="#">Multi level 1</a></li>
				    <li><a class="nav-link" href="#">Multi level 2</a></li>
				    <li><a class="nav-link" href="#">Multi level 3</a></li>
				</ul>
		    </li>
		</ul>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#"> Another page </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#"> Demo link </a>
	</li>
</ul>
</nav>
        </div>
    )
}

export default Sidebar;