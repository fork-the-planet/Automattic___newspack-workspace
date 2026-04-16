#!/bin/bash

source /var/scripts/repos.sh
source /var/scripts/resolve-project-path.sh

find_project() {
    local path=$(resolve_project_path "$1")
    if [ -z "$path" ]; then path=$(resolve_project_path "newspack-$1"); fi
    if [ -z "$path" ]; then echo "Project $1 not found" >&2; exit 1; fi
    echo "$path"
}

if [ $# -eq 0 ]; then
	echo "No arguments provided"
	echo "Possible arguments: all, theme, block-theme, or any plugin slug"
	exit 1
fi

WHAT_TO_BUILD="$1"

build_dir() {
    echo "Building $1"
    cd "$1"
    if [ "$2" == "ci" ]; then
        npm ci --legacy-peer-deps
    fi
    composer install
    npm run build
}

case $WHAT_TO_BUILD in
    all)
        while IFS= read -r dir; do
            [ -d "$dir" ] && build_dir "$dir" "$2"
        done < <(get_all_project_dirs)
        ;;
    *)
        build_dir "$(find_project "$WHAT_TO_BUILD")" "$2"
        ;;
esac
