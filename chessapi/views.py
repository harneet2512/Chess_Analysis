from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def handle_hook_data(request):
    if request.method == 'POST':
        try:
            received_data = json.loads(request.body)
            # Process the received data here as needed
            # Example: Save 'received_data' to a model or perform operations
            
            # Return a success response
            return JsonResponse({'message': 'Data received and processed successfully!'})
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
