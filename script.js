$(document).ready(function(){

    var response=[
        {
          "id": 63,
          "firstName": "Yewawde",
          "lastName": "Bernstein",
          "email": "ZEuaparadorn@tincidunt.org",
          "phone": "(902)695-2806",
          "address": {
            "streetAddress": "8535 Suspendisse Ave",
            "city": "Eldridge",
            "state": "WY",
            "zip": "97087"
          },
          "description": "lorem nullam aenean ac mattis ante sed massa mattis lectus pulvinar consectetur turpis vestibulum vestibulum dui nec lectus velit hendrerit eget vitae tincidunt mattis risus ac massa odio sed massa porta curabitur"
        },
        {
          "id": 32,
          "firstName": "Hae-Yong",
          "lastName": "Kimmel",
          "email": "SBoudreaux@nec.com",
          "phone": "(598)129-8701",
          "address": {
            "streetAddress": "8865 Sed St",
            "city": "Idaho Falls",
            "state": "ME",
            "zip": "70678"
          },
          "description": "sed mattis non aliquam sed pretium hendrerit nullam nec morbi suspendisse sollicitudin augue morbi massa aliquam tortor sollicitudin morbi adipiscing tortor at id id lacus ac ac sollicitudin malesuada consequat sapien sagittis"
        },
        {
          "id": 151,
          "firstName": "Coralas",
          "lastName": "Altar",
          "email": "TBatrouny@pulvinar.io",
          "phone": "(609)349-6608",
          "address": {
            "streetAddress": "8812 Tortor Ln",
            "city": "Zionsville",
            "state": "FL",
            "zip": "46759"
          },
          "description": "etiam sit scelerisque egestas nullam curabitur malesuada quis nec amet pulvinar placerat nec consequat scelerisque eros orci elit amet sit quis at tempor consectetur odio adipiscing sed lectus consequat pretium hendrerit nec"
        },
        {
          "id": 617,
          "firstName": "Asher",
          "lastName": "Tapia",
          "email": "RMayne@placerat.io",
          "phone": "(678)873-3639",
          "address": {
            "streetAddress": "4812 Sollicitudin Rd",
            "city": "Faribault",
            "state": "NV",
            "zip": "71397"
          },
          "description": "rutrum tempor sollicitudin at tincidunt nunc vestibulum vestibulum mattis pulvinar pulvinar aenean hendrerit sed tincidunt nunc porta porta rutrum vitae pulvinar malesuada sed dolor turpis tellus magna eros lectus quis fringilla tempor"
        },
        {
          "id": 985,
          "firstName": "Harpal",
          "lastName": "Mckinney",
          "email": "SPlunkett@sed.gov",
          "phone": "(264)165-2179",
          "address": {
            "streetAddress": "979 Eros Ln",
            "city": "Kingsley",
            "state": "WA",
            "zip": "69627"
          },
          "description": "scelerisque suspendisse ac vitae nec morbi vitae sagittis in ipsum id lacus dolor vitae lacus curabitur convallis massa sed elit tellus aliquam in sed pulvinar morbi amet etiam sit pulvinar rutrum morbi"
        },
        {
          "id": 761,
          "firstName": "Benjamin",
          "lastName": "Jensen",
          "email": "SDeitz@lectus.org",
          "phone": "(840)853-3453",
          "address": {
            "streetAddress": "1125 Amet Rd",
            "city": "Moulton",
            "state": "VT",
            "zip": "49199"
          },
          "description": "mi mattis porta tortor dolor suspendisse tempor tincidunt dolor tortor vitae sed et eget magna aliquam dui pharetra aliquam donec sed mi vitae eros amet lorem odio lacus odio convallis turpis nullam"
        },
        {
          "id": 314,
          "firstName": "Saim",
          "lastName": "Medeiros",
          "email": "SYarber@elementum.gov",
          "phone": "(701)372-6454",
          "address": {
            "streetAddress": "2927 Id St",
            "city": "Boynton Beach",
            "state": "VT",
            "zip": "94233"
          },
          "description": "vitae odio convallis massa tincidunt consequat ac sollicitudin vel consequat in pulvinar non facilisis et pharetra placerat dui ante sit massa vestibulum suspendisse amet vitae lectus consectetur sed neque nunc massa vestibulum"
        },
        {
          "id": 39,
          "firstName": "Audrey",
          "lastName": "Loria",
          "email": "GBernauer@amet.org",
          "phone": "(756)005-1890",
          "address": {
            "streetAddress": "4983 Sollicitudin Dr",
            "city": "Wabash",
            "state": "CO",
            "zip": "35240"
          },
          "description": "id at dolor eget neque non at dui dolor vitae placerat adipiscing aliquam malesuada egestas eros sagittis amet amet consectetur ac porta sit odio vestibulum sollicitudin vitae egestas vestibulum aliquam magna sit"
        }
    ]


    function details(id,data){
        for(var i=0;i<data.length;i++){
            if(id==data[i].id){
                $("#fullname").text(data[i].firstName+" "+data[i].lastName);
                $("#description").html(data[i].description);
                $("#address").html(data[i].address.streetAddress);
                $("#city").html(data[i].address.city);
                $("#state").html(data[i].address.state);
                $("#zip").html(data[i].address.zip);
            }
        }
        $(".data-row").removeClass("active");
        $("#"+id).addClass("active");
        $("#info-content").css({
            "display":"block"
        })
    }

    
   
    
   
       for(var i=0;i<response.length;i++){
        var dataRow=$("<tr>").addClass("data-row").attr("id",response[i].id);
        var tabledata1=$("<td>").addClass("column1").html(response[i].id);
        var tabledata2=$("<td>").addClass("column2").html(response[i].firstName);
        var tabledata3=$("<td>").addClass("column3").html(response[i].lastName);
        var tabledata4=$("<td>").addClass("column4").html(response[i].email);
        var tabledata5=$("<td>").addClass("column5").html(response[i].phone);
        dataRow.append(tabledata1,tabledata2,tabledata3,tabledata4,tabledata5);
        $("#table-content").append(dataRow);
            
            dataRow.click(function(){
            details($(this).attr("id"),response);
            })
        }
        $("#search-box").keyup(function(e){
            var searchkey=e.target.value;
            var tabledataByFirstName,tabledataByLastName;
            var tableItems=document.getElementsByClassName("data-row");
               
                for(var i=0;i<tableItems.length;i++){
                    tabledataByFirstName=tableItems[i].getElementsByClassName("column2")[0].innerHTML;
                    tabledataByLastName=tableItems[i].getElementsByClassName("column3")[0].innerHTML;
                    if(tabledataByFirstName.toLowerCase().indexOf(searchkey.toLowerCase()) > -1 ||
                        tabledataByLastName.toLowerCase().indexOf(searchkey.toLowerCase()) > -1 ){
                        tableItems[i].style.display="";
                    }else{
                        tableItems[i].style.display="none";
                    }
                }

        })
        

    
})