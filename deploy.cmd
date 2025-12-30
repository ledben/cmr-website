call gcloud builds submit --tag gcr.io/dressobj/cmr-website &
call gcloud run deploy cmr-website --image gcr.io/dressobj/cmr-website --platform managed --region europe-west1 --allow-unauthenticated