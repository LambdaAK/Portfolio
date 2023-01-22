
export default function AboutMeSection() {
    return (
        <div id="about" className="text-white text-3xl min-h-screen float-left pt-12 bg-black">
            

            <div className="flex justify-center"><Header/></div>

            
            <div className="h-10"></div>
            <Description/>

        </div>
    )
}


function Header() {


    

    return (
        <div className="ml-10">

            <a className="text-5xl text-slate-500">About myself</a>

            

        </div>
    )
}



function Description() {
    return(

        <div className="text-3xl text-blue ml-10 ">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, feugiat non egestas quis, eleifend at augue. Duis non tellus quis justo sollicitudin scelerisque id eu purus. Phasellus euismod sem at mauris sollicitudin sagittis. Suspendisse iaculis molestie leo. Integer eget tristique arcu, a tincidunt ipsum. Vestibulum sit amet metus ut elit consectetur cursus. Fusce ultricies purus non consectetur mollis.

        Duis vitae arcu id ligula hendrerit fringilla eu non sapien.
        
        Morbi laoreet arcu a luctus suscipit. Donec ullamcorper ante quam, vel vestibulum orci suscipit in. Fusce bibendum quam sit amet bibendum varius. Quisque a metus id erat vulputate rhoncus non sit amet nisi. Proin mollis sapien nec justo molestie, quis rutrum tortor pulvinar. Aliquam in auctor ex, vitae interdum velit. Praesent nec odio eget tellus bibendum condimentum vel at metus. Curabitur eu tortor blandit, euismod erat et, suscipit mi. Integer at urna non risus suscipit interdum eget vel lorem. Maecenas pretium finibus lacus. Donec malesuada tempor facilisis. Fusce et erat eget lectus scelerisque aliquam. Ut finibus elit sed enim ultricies ornare. Nunc nisi lorem, tincidunt sit amet auctor ultricies, egestas a erat.

        Duis id elementum augue. Maecenas interdum, lacus sit amet scelerisque accumsan, diam nulla vulputate tellus, eu dictum ex dui at mi. Etiam consequat molestie sem, id aliquet arcu lacinia sed. Suspendisse aliquet, nibh id malesuada fermentum, turpis sem egestas lectus, at vehicula nulla neque ac justo. Nunc dapibus nisi et erat iaculis ornare nec et mi. Aliquam elementum sollicitudin pellentesque. Praesent maximus interdum orci sed tristique. Integer non dapibus est, id eleifend metus. Suspendisse ullamcorper bibendum porttitor. Donec quis aliquet lorem. Donec sagittis viverra feugiat. Fusce non facilisis orci.

        Quisque auctor pulvinar lectus non posuere. Quisque risus mauris, placerat a magna in, gravida dapibus metus. Sed eu odio ultricies metus rutrum blandit vel vel nisi. Nulla blandit leo est, sit amet pretium risus semper nec. Nulla felis est, tristique nec nisl ut, lobortis ultricies ante. Duis ac metus sed libero pharetra condimentum. Fusce et urna id enim efficitur tempus quis non ipsum. Etiam nunc turpis, dictum id interdum quis, malesuada eget elit. Proin vitae justo maximus, auctor tortor et, tempor quam. Quisque dictum augue eget hendrerit ultrices. Suspendisse lorem enim, sodales ut magna id, mattis auctor dui. Cras arcu libero, dignissim eu consectetur rutrum, dignissim vitae metus.

        In ante metus, tristique vitae ultrices nec, facilisis vitae tellus. Sed eget luctus dolor, nec pharetra mi. Nulla dignissim, tortor non viverra consequat, urna ex vulputate dui, vel tincidunt purus ipsum id nisl. Duis condimentum purus non ex mattis pellentesque. Curabitur facilisis rhoncus elit, in varius nisi ultricies sit amet. Quisque aliquet lorem quis sem feugiat mattis. Donec facilisis enim nisl, a sodales tortor hendrerit quis. Sed sed sodales dolor. Fusce id fringilla tellus, eget tristique est. Nulla quis neque eget nisl ultricies egestas. In non mollis quam. Ut facilisis elit at nulla tincidunt eleifend.

        </div>
    )
}