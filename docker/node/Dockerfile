FROM node:12.16.1-stretch@sha256:facc1cbde6e5aa3255092b1a1417451953c80bd31ab5a4403f8bcd90b90a8407

ENV PATH="/opt/sample-integration/bin:${PATH}"

COPY ./entrypoint.sh "/opt/sample-integration/entrypoint.sh"
COPY ./bin "/opt/sample-integration/bin"
COPY ./shared "/opt/sample-integration/shared"

ENTRYPOINT ["/opt/sample-integration/entrypoint.sh"]
