
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {          
            $('.navbar').css('height','60px')
            $('.logo-nav').css('width','60px');
        }
        else{
            $('.navbar').css('height','100px')
            $('.logo-nav').css('width','100px');
        }
    });

    

    
    // $(document).bind("contextmenu",function(e) {  
    //     e.preventDefault(); 
    //     return alert("sorry you cant copy or inspect this website ")
     
    // });
    // $(document).keydown(function(e){ 
    //     if(e.which === 123){ 
     
    //        return false; 
     
    //     } 
     
    // }); 
    $(window).scroll(function() {
        if ($(document).scrollTop() > 600) {          
            $('.navbar').css('background-color','#e5e5e5')
            $('.logo-nav').attr('src','../Assests/logo-nav-green.png')
            $('.nav-link').css('color','#003A2E')
            if($(window).width() < 600 ){
                $('.nav-link').css('color','#A9AFAB')
            }
        
        }
        else{
            $('.navbar').css('background-color','transparent')
            $('.logo-nav').attr('src','../Assests/logo-nav.png')
            $('.nav-link').css('color','#e5e5e5')
        }
    });


 
    gsap.registerPlugin(ScrollTrigger,TextPlugin);

    let tl = gsap.timeline({
        scrollTrigger :{
            trigger : ".shine",
         
            toggleActions: 'play none play none',
            scrub: true,
            nullTargetWarn: false,
            start : "-90 top",
            end: '+=900',
          }
            });


            tl.fromTo('.container-hang',5 ,{x:'100%'},{x:'5%'},'first')
            tl.from('.text-one',1 ,{x:'-150%'},'first')
            tl.from('.text-two',3 ,{x:'-200%'},'first')



    
            let line = gsap.timeline({
                scrollTrigger :{
                    trigger : ".services",
                    marker:true,
                    toggleActions: 'play none play none',
                    scrub: true,
                    nullTargetWarn: false,
                    start : "-600 top",
                    end: '+=1100',
                  }
                    });


                   line.to('.yellow-line, .yellow-line-two',5, {width : 150})
                   line.to(' .yellow-line-two',5, {rotation : 90})
                   line.to(' .yellow-line-three',8, {height : 700})
                  

            
                   let clients = gsap.timeline({
                    scrollTrigger :{
                        trigger : ".clients",
                        marker:true,
                        pin:true,
                        toggleActions: 'play none play none',
                        scrub: true,
                        nullTargetWarn: false,
                        start : "top top",
                        end: '+=1100',
                      }
                        });
                        clients.to(' .clients-yellow-line',8, {width : 700})
                        clients.from(' .hsa',8, {x : '100%', opacity:0})
                        clients.from(' .alsaeed',8, {y : '150%'})
                        clients.from(' .journy',8, {y : '-100%', opacity:0} , 'last')
                        clients.from(' .beour',8, {opacity:0})
                        


    //form

    (function($) {
        "use strict"; // Start of use strict
      
        // Detect when form-control inputs are not empty
        $(".cool-b4-form .form-control").on("input", function() {
          if ($(this).val()) {
            $(this).addClass("hasValue");
          } else {
            $(this).removeClass("hasValue");
          }
        });
      })(jQuery); // End of use strict