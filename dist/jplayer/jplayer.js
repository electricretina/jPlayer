 function activeJPlayer(strId,strTitle,strMp3){
        $("#jquery_jplayer_"+strId).jPlayer({
            jPlayer: "#jquery_jplayer_"+strId,
		    cssSelectorAncestor: "#jp_container_"+strId,
            ready:function(){
                $(this).jPlayer("setMedia",{
                    title:strTitle,
                    mp3:strMp3
                });
            },
            swfPath: "http://fbc6.dnsalias.com/fileadmin/dist/jplayer",
		    supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
        });
    };