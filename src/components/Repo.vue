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
        <p class="repo-subtitle">{{ data.updated }}</p>

        <div class="repo-footer">
            <div class="repo-lang">
                <div class="lang-circle"></div>
                <span>{{ data.language }}</span>
            </div>
            <div class="repo-labels">
                <div class="label">
                    <span>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-1">
                            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                        </svg>
                        Star
                    </span>
                    <span>{{ data.stars }}</span>
                </div>
                <div class="label">
                    <span>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
                            <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        Fork
                    </span>
                    <span>{{ data.forks }}</span>
                </div>
            </div>
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
        width: 49%;
        border: 1px solid $border-color;
        border-radius: 6px;
        padding: 1rem;
        cursor: pointer;
        color: #4a5057;
        font-size: 14px;
        @media(max-width: 800px) {
            width: 100%;
        }
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
            justify-content: space-between;
            gap: 4px;
            font-size: 12px;
        }
        .lang-circle {
            background: #f1e05a;
            width: 15px;
            height: 15px;
            border-radius: 50%;
        }
        &-lang {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        &-labels {
            display: flex;
            gap: 8px;
            .label {
                border: 1px solid #d0d7de;
                border-radius: 4px;
                
                display: flex;
            }
            span {
                display: flex;
                border-right: 1px solid #d0d7de;
                align-items: center;
                gap: 3px;
                padding: 2px 7px;
                font-size: 12px;
            }
        }
    }
</style>