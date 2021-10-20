<template>
    <div class="repo">
        <div class="repo-header">
            <h4 class="repo-title">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0">
                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg> 
                <span>{{ data.title }}</span>
            </h4>
            <div class="repo-status">
                <!-- {{ data.status }} -->
                public
            </div>
        </div>
        <p class="repo-subtitle">PSD to html / Responsive</p>

        <div class="repo-footer">
            <div class="lang-circle"></div>
            <span>{{ data.language }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }        
}
</script>


<style scoped lang="scss">
    .repo {
        width: 50%;
        background-color: var(--color-canvas-default);
        border: 1px solid #d0d7de;
        border-radius: 6px;
        padding: 1rem;
        cursor: pointer;
        color: #4a5057;
        font-size: 14px;
        &-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: .5rem;
        }
        &-status {
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 12px;
                padding: 0 7px;
            }
        &-title {
            color: #0969da;
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 14px;
        }
        &-subtitle {
            font-size: 12px;
            color: #4a5057 ;
            margin-bottom: 1rem;
        }
        &-footer {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
        }
        .lang-circle {
            background: #f1e05a;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            
        }
    }
</style>