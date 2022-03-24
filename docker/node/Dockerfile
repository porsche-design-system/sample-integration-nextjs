FROM node:16.14.0-stretch-slim

ENV PATH="/opt/sample-integration/bin:${PATH}"

RUN apt-get update && \
    apt-get install -yq openssh-client git curl

COPY ./entrypoint.sh "/opt/sample-integration/entrypoint.sh"
COPY ./bin "/opt/sample-integration/bin"
COPY ./shared "/opt/sample-integration/shared"

ENTRYPOINT ["/opt/sample-integration/entrypoint.sh"]
