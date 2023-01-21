import { Controller, Get } from '@nestjs/common';
import { Registry, collectDefaultMetrics } from 'prom-client';


@Controller('metrics')
export class MetricsController {

    @Get()
    getMetrics() {
        // Create a Registry which registers the metrics
        const register = new Registry()

        // Add a default label which is added to all metrics
        register.setDefaultLabels({
        app: 'example-nodejs-app'
        })

        // Enable the collection of default metrics
        collectDefaultMetrics({ register })


        return register.metrics();
    }


}
