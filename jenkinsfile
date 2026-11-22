pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Toolchain') {
            steps {
                sh '''#!/usr/bin/env bash
                    set -euo pipefail

                    if [ -x "$HOME/.bun/bin/bun" ]; then
                        echo "Bun already installed: $("$HOME/.bun/bin/bun" --version)"
                    else
                        curl -fsSL https://bun.sh/install | bash
                        echo "Bun installed: $("$HOME/.bun/bin/bun" --version)"
                    fi

                    echo "Node: $(node --version)"
                    node_major=$(node -p 'process.versions.node.split(".")[0]')
                    node_minor=$(node -p 'process.versions.node.split(".")[1]')
                    if [ "$node_major" -lt 20 ] || { [ "$node_major" -eq 20 ] && [ "$node_minor" -lt 9 ]; }; then
                        echo "Node 20.9+ is required by Next 16; found $(node --version)"
                        exit 1
                    fi
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''#!/usr/bin/env bash
                    set -euo pipefail
                    export PATH="$HOME/.bun/bin:$PATH"
                    bun install --frozen-lockfile
                '''
            }
        }

        stage('Lint') {
            steps {
                sh '''#!/usr/bin/env bash
                    set -euo pipefail
                    export PATH="$HOME/.bun/bin:$PATH"
                    bun run lint
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''#!/usr/bin/env bash
                    set -euo pipefail
                    export PATH="$HOME/.bun/bin:$PATH"
                    bun run build
                '''
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }

        failure {
            echo 'Build failed. Check the console output.'
        }
    }
}
