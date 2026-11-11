FROM node:22-bookworm

# Basic tools + Python for the SBoM CLI
RUN apt-get update && apt-get install -y \
    curl git gnupg python3 python3-pip ripgrep jq \
 && rm -rf /var/lib/apt/lists/*

# Stripe CLI
RUN curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public \
      | gpg --dearmor -o /usr/share/keyrings/stripe.gpg \
 && echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" \
      > /etc/apt/sources.list.d/stripe.list \
 && apt-get update && apt-get install -y stripe \
 && rm -rf /var/lib/apt/lists/*

# Claude Code
RUN npm install -g @anthropic-ai/claude-code

# Run as a non-root user with an empty home directory
USER node
WORKDIR /workspace
RUN git config --global user.name "Sean" \
 && git config --global user.email "seanpaulmeehan@gmail.com"

CMD ["bash"]
