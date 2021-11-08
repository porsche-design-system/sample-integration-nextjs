FROM node:14.16.1-stretch-slim

ENV PATH="/opt/sample-integration/bin:${PATH}"

COPY ./entrypoint.sh "/opt/sample-integration/entrypoint.sh"
COPY ./bin "/opt/sample-integration/bin"
COPY ./shared "/opt/sample-integration/shared"

ENTRYPOINT ["/opt/sample-integration/entrypoint.sh"]
