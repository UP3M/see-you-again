<script lang="ts">
        
     import DetailUpdate from './DetailUpdate.svelte';
     import { onMount  } from 'svelte';
     import {onValue, ref } from 'firebase/database';
     import { db } from '$lib/scripts/firestore';
     import { Post } from "$lib/models/post"
     import { query, DataSnapshot, child, get} from 'firebase/database';
     
     export let id: string;
     let key: string;
    var postsN = new Array();
    var postsKeys = new Array();

    var post_final = new Post("", 0, "","", false,"", null,"")
     onMount(() => {
        onValue(ref(db, "/posts"), s => {
            if (s.exists()) { 
                postsN = Object.values(s.val());
                post_final = postsN[parseInt(id)]
                postsKeys = Object.keys(s.val());
                key = postsKeys[parseInt(id)]
            }
        });
     });

</script>

<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
        <DetailUpdate {post_final} {key}/>
    </div>
</div>
