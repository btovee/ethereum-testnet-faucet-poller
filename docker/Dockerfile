FROM node:latest

RUN apt-get update && apt-get install -y cron
RUN mkdir -p /usr/src/app

COPY ./docker/templates/crontab /tmp/crontab
RUN touch /etc/cron.d/my-cron-job
RUN chmod 0644 /etc/cron.d/my-cron-job
RUN touch /var/log/cron.log

COPY ./docker/templates/setupCron.sh /tmp/setupCron.sh
RUN chmod +x /tmp/setupCron.sh

ENV TASK_SCHEDULE='* * * * *'
COPY ./src /usr/src/app

CMD ["/tmp/setupCron.sh"]
EXPOSE 443
