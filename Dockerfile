FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

COPY . /app/

# Install the dependencies
RUN pip3 install -r requirements.txt

CMD [ "uvicorn", "main:app", "--host=0.0.0.0" ]